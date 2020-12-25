const sym = [  {"UNDERSCORE": "_"}, {"LP": "("}, {"RP": ")"}, {"LB": "["}, {"RB": "]"}, {"PIPE": "|"}, 
                          {"QUESTION": "?"}, {"COLON":":"}, {"SEMI_COLON": ';'}, {"DOT":'.'}, {"COMMA": ','}, 
                          {"AS": 'as'}, {"TRUE": 'true'}, {"FALSE": 'false'}, {"BETWEEN": 'between'}, {"EQUALS": '='}, {"NOT_EQUALS": '!='}, 
                          {"GREATER": '>'}, {"LESS": '<'}, {"GREATER_EQUALS": ">="}, {"LESS_EQUALS": '<='}, 
                          {"REGEX_MATCH": '~'}, {"MATCH": '=~'}, {"EXACTLY_MATCH": '==~'}, {"WAS": 'was'}, 
                          {"DURING": 'during'}, {"BEFORE": 'before'}, {"AFTER": 'after'}, {"NOT": 'NOT'}, {"AND": 'AND'},{"OR": "OR"}, 
                          {"XOR": "Xor"}, {"ADD": '+'}, {"SUBTRACT": "-"}, {"MULTIPLY": "*"}, {"DIVIDE": '/'}, 
                          {"MOD": '%'}, {"NULL": 'null'}, {"IN": 'in'}, {"NOT_IN": 'not in'}, {"ORDERBY": 'order by'}, {"ASC": 'asc'}, 
                          {"DESC": 'desc'}, {"ISSUE": 'issue'}, {"SATISFY": 'satisfy'}, {"EXISTS": 'exists'}, {"UNSIGN": 'unsign'}, 
                          {"DECIMAL": 'decimal'}, {"ID": 'id'}, {"KEY": 'key'}, {"MILLIS": 'millies'}, {"SECONDS": 'seconds'}, {"MINUTES": 'minutes'}, 
                          {"HOURS": 'hours'}, {"DAYS": 'days'}, {"WEEKS": 'weeks'}, {"DATE": 'date'}, {"DATETIME": 'datetime'}, 
                          {"STRING": 'string'}, {"WS": 'ws'} ];

const suggest = [ "UNDERSCORE", "LP", "RP", "LB", "RB", "PIPE", 
                          "QUESTION", "COLON", "SEMI_COLON", "DOT", "COMMA"
                           ];

const transform = (suggest) => {
  const data = suggest.map(el => {
    for (let key of sym) {
      if(Object.keys(key)[0] === el) 
        return key[el]
    }
  })
  return data
}

const suggestions = (monacoInstance) => [
    {
        label: '_',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '_',
    },
    {
        label: '(',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '(',
    },
    {
        label: ')',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: ')',
    },
    {
        label: '[',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '[',
    },
    {
        label: ']',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: ']',
    },
    {
        label: '|',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '|',
    },
    {
        label: '?',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '?',
    },
    {
        label: ':',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: ':',
    },
    {
        label: ';',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: ';',
    },
    {
        label: '.',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '.',
    },
    {
        label: ',',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: ',',
    },
    {
        label: 'as',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'as',
    },
    {
        label: 'true',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'true',
    },
    {
        label: 'false',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'false',
    },
    {
        label: 'between',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'between',
    },
    {
        label: '=',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '=',
    },
    {
        label: '!=',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '!=',
    },
    {
        label: '>',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '>',
    },
    {
        label: '<',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '<',
    },
    {
        label: '>=',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '>=',
    },
    {
        label: '<=',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '<=',
    },
    {
        label: '~',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '~',
    },
    {
        label: '=~',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '=~',
    },
    {
        label: '==~',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '==~',
    },
    {
        label: 'was',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'was',
    },
    {
        label: 'during',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'during',
    },
    {
        label: 'before',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'before',
    },
    {
        label: 'after',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'after',
    },
    {
        label: 'NOT',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'NOT',
    },
    {
        label: 'AND',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'AND',
    },
    {
        label: 'OR',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'OR',
    },
    {
        label: 'XOR',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'XOR',
    },
    {
        label: '+',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '+',
    },
    {
        label: '-',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '-',
    },
    {
        label: '*',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '*',
    },
    {
        label: '/',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '/',
    },
    {
        label: '%',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: '%',
    },
    {
        label: 'null',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'null',
    },
    {
        label: 'in',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'in',
    },
    {
        label: 'not in',
        kind: monacoInstance.languages.CompletionItemKind.Text,
        insertText: 'not in',
    },
    
]