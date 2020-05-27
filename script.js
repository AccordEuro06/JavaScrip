const TOKEN_NUMBER = "NUMBER";
const TOKEN_PLUS = "PLUS";
const TOKEN_MINUS = "MINUS";
const TOKEN_STAR = "STAR";
const TOKEN_SLASH = "SLASH";
const TOKEN_POWER = "POWER";
const TOKEN_OPEN_PARENT = "OPEN_PARENT";
const TOKEN_CLOSE_PARENT = "CLOSE PARENT";
const TOKEN_NAME = "NAME";
const TOKEN_UNKNOWN = "UNKNOWN";

function parse_inputed_string(str) {
    const tokens = [];
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (/[0-9]/.test(char)) {
            let number = char;
            while (i + 1 < str.length) {
                let char = str.charAt(i + 1);
                if (!/[0-9]/.test(char)) break;
                number += char;
                i++;
            }
            tokens.push({
                type: TOKEN_NUMBER,
                number: parseFloat(number)
            });
        } else if (/[_A-Za-z]/.test(char)) {
            let name = char;
            while (i + 1 < str.length) {
                let char = str.charAt(i + 1);
                if (!/[_A-Za-z0-9]/.test(char)) break;
                name += char;
                i++;
            }
            tokens.push({
                type: TOKEN_NAME,
                name: name,
            });
        } else if (/\+/.test(char)) {
            tokens.push({
                type: TOKEN_PLUS,
            });
        } else if (/\-/.test(char)) {
            tokens.push({
                type: TOKEN_MINUS,
            });
        } else if (/\^/.test(char)) {
            tokens.push({
                type: TOKEN_POWER,
            });
        } else if (/\*/.test(char)) {
            tokens.push({
                type: TOKEN_STAR,
            });
        } else if (/\//.test(char)) {
            tokens.push({
                type: TOKEN_SLASH,
            });
        } else if (/\(/.test(char)) {
            tokens.push({
                type: TOKEN_OPEN_PARENT,
            });
        } else if (/\)/.test(char)) {
            tokens.push({
                type: TOKEN_CLOSE_PARENT,
            });
        } else if (/[ \r\t\n]/.test(char)) {
            //IGNORE WHITESPACES
        } else {
            tokens.push({
                type: TOKEN_UNKNOWN,
            });
        }
    }
    return tokens;
}


function token(parser) {
    return parser.tokens.length && parser.current_token < parser.tokens.length ? parser.tokens[parser.current_token] : null;
}

function next_token(parser) {
    const result = token(parser);
    parser.current_token++;
    return result;
}

function token_is(parser, type) {
    return token(parser) && token(parser).type == type;
}
const AST_NUMBER = "AST_NUMBER";
const AST_BIN_OPERATOR = "AST_BIN_OPERATOR";
const AST_FUNCTION = "AST_FUNCTION";

function parse_function(parser, name) {
    if (token_is(parser, TOKEN_OPEN_PARENT)) {
        next_token(parser);
        const first_argument = parse_expression(parser);
        if (token_is(parser, TOKEN_CLOSE_PARENT)) {
            next_token(parser);
            return {
                type: AST_FUNCTION,
                name: name,
                arguments: [first_argument],
            };
        } else {
            // alert('Error');
        }
    } else {
        // alert('Error');
    }
}

function parse_number(parser) {
    if (token_is(parser, TOKEN_NUMBER)) {
        return {
            type: AST_NUMBER,
            number: next_token(parser),
        };
    } else if (token_is(parser, TOKEN_NAME)) {
        const name = next_token(parser);
        if (token_is(parser, TOKEN_OPEN_PARENT)) {
            return parse_function(parser, name);
        } else {
            // alert('ERROR');
            return null;
        }
    } else if (token_is(parser, TOKEN_OPEN_PARENT)) {
        next_token(parser);
        const result = parse_expression(parser);
        if (token_is(parser, TOKEN_CLOSE_PARENT)) {
            next_token(parser);
            return result;
        } else {
            // alert('ERROR');
        }
    } else {
        return null;
    }
}


function parse_power(parser) {
    let result = parse_number(parser);
    while (token_is(parser, TOKEN_POWER)) {
        const operator = next_token(parser);
        let right_operand = parse_number(parser);
        if (!right_operand) {
            return null;
        }
        result = {
            type: AST_BIN_OPERATOR,
            operator: operator,
            left: result,
            right: right_operand,
        }
    }
    return result;
}

function parse_multiplication(parser) {
    let result = parse_power(parser);
    while (token_is(parser, TOKEN_STAR) || token_is(parser, TOKEN_SLASH)) {
        const operator = next_token(parser);
        let right_operand = parse_power(parser);
        if (!right_operand) {
            return null;
        }
        result = {
            type: AST_BIN_OPERATOR,
            operator: operator,
            left: result,
            right: right_operand,
        }
    }
    return result;
}

function parse_addition(parser) {
    let result = parse_multiplication(parser);
    while (token_is(parser, TOKEN_PLUS) || token_is(parser, TOKEN_MINUS)) {
        const operator = next_token(parser);
        let right_operand = parse_multiplication(parser);
        if (!right_operand) {
            return null;
        }
        result = {
            type: AST_BIN_OPERATOR,
            operator: operator,
            left: result,
            right: right_operand,
        }
    }
    return result;
}

function parse_expression(parser) {
    return parse_addition(parser);
}

function evaluate_ast(ast) {
    if (ast.type == AST_BIN_OPERATOR) {
        const left = evaluate_ast(ast.left);
        const right = evaluate_ast(ast.right);
        if (ast.operator.type == TOKEN_PLUS) {
            return left + right;
        } else if (ast.operator.type == TOKEN_MINUS) {
            return left - right;
        } else if (ast.operator.type == TOKEN_STAR) {
            return left * right;
        } else if (ast.operator.type == TOKEN_SLASH) {
            return left / right;
        } else if (ast.operator.type == TOKEN_POWER) {
            return Math.pow(left, right);
        } else {
            // alert('UNKNOWN OPERATOR', ast.operator.type);
        }
    } else if (ast.type == AST_NUMBER) {
        return ast.number.number;
    } else if (ast.type == AST_FUNCTION) {
        if (ast.name.name == 'sqrt') {
            const argument = evaluate_ast(ast.arguments[0]);
            return Math.sqrt(argument);
        } else if (ast.name.name == 'sin') {
            const argument = evaluate_ast(ast.arguments[0]);
            return Math.sin(argument);
        } else if (ast.name.name == 'cos') {
            const argument = evaluate_ast(ast.arguments[0]);
            return Math.cos(argument);
        } else {
            alert('UNKNOWN FUNCTION', ast.name.name);
        }
        return ast.number.number;
    } else {
        // alert('UNKNOWN', ast);
    }
}

function addNum(data) {
    $('#input').val($('#input').val() + data);
}
let getButtonValues = class {
    getNumbers() {
        $('#numberOne').on('click', function () {
            addNum('1');
        });
        $('#numberTwo').on('click', function () {
            addNum('2');
        });
        $('#numberThree').on('click', function () {
            addNum('3');
        });
        $('#numberFour').on('click', function () {
            addNum('4');
        });
        $('#numberFive').on('click', function () {
            addNum('5');
        });
        $('#numberSix').on('click', function () {
            addNum('6');
        });
        $('#numberSeven').on('click', function () {
            addNum('7');
        });
        $('#numberEight').on('click', function () {
            addNum('8');
        });
        $('#numberNine').on('click', function () {
            addNum('9');
        });
        $('#numberDoubleZero').on('click', function () {
            addNum('00');
        });
        $('#numberZero').on('click', function () {
            addNum('0');
        });
        $('#numberComa').on('click', function () {
            addNum('.');
        });
    };
    getOperations() {
        $('#cos').on('click', function () {
            addNum('cos()');
        });
        $('#sin').on('click', function () {
            addNum('sin()');
        });
        $('#sqrt').on('click', function () {
            addNum('sqrt()');
        });
        $('#power').on('click', function () {
            addNum('^');
        });
        $('#clean').on('click', function () {
            $('#input').val('');
        });
        $('#leftBracket').on('click', function () {
            addNum('(');
        });
        $('#rightBracket').on('click', function () {
            addNum(')');
        });
        $('#devide').on('click', function () {
            addNum('/');
        });
        $('#multiply').on('click', function () {
            addNum('*');
        });
        $('#subtraction').on('click', function () {
            addNum('-');
        });
        $('#addition').on('click', function () {
            addNum('+');
        });
    };

};

function update() {
    const input_expression = input.value;
    const tokens = parse_inputed_string(input_expression);
    const parser = {
        tokens: tokens,
        current_token: 0,
    };
    const ast = parse_expression(parser);
    let output_text = '';
    if (ast) {
        2
        output_text = evaluate_ast(ast);
    } else {
        output_text = 'Error';
    }
    console.log(`result: ${output_text}`);
    $('#input').val(output_text);
}

function main() {
    input.oninput = update;
}
window.onload = main;




const calculator = (function () {
    let getbuttonvalue = new getButtonValues();

    function calculate() {
        getbuttonvalue.getNumbers();
        getbuttonvalue.getOperations();
        // getbuttonvalue.clickSummary();
    }
    return {
        calculate: calculate
    }
})();
calculator.calculate();