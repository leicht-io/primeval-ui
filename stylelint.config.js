module.exports = {
    "rules": {
        "color-no-invalid-hex": true,
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never",
        "function-name-case": "lower",
        "function-url-quotes": "always",
        "function-whitespace-after": "always",
        "unit-case": "lower",
        "unit-no-unknown": true,
        "unit-whitelist": [
            "px",
            "%",
            "deg",
            "ms",
            "em",
            "vh",
            "vw",
            "s",
            "rem",
            "fr"
        ],
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "shorthand-property-no-redundant-values": true,
        "property-case": "lower",
        "declaration-block-no-duplicate-properties": [
            true,
            {
                "ignore": [
                    "consecutive-duplicates-with-different-values",
                ],
            },
        ],
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-semicolon-space-after": "always-single-line",
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-no-unknown": [
            true,
            {
                "ignorePseudoElements": [
                    "ng-deep",
                ],
            },
        ],
        "selector-type-case": "lower",
        "selector-max-id": 0,
    },
};
