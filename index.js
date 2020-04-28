module.exports = {
	extends: ['stylelint-config-css-modules'],
	plugins: ['stylelint-order'],
	rules: {
		'indentation': 'tab',
		'order/properties-order': [
			'composes',
			'content',
			'appearance',
			'background',
			'background-color',
			'background-image',
			'background-position',
			'background-size',
			'width',
			'height',
			'min-width',
			'min-height',
			'max-width',
			'max-height',
			'cursor',
			'user-select',
			'pointer-events',
			'font',
			'font-family',
			'font-size',
			'font-weight',
			'font-style',
			'letter-spacing',
			'line-height',
			'white-space',
			'overflow-wrap',
			'color',
			'fill',
			'text',
			'text-align',
			'text-decoration',
			'text-shadow',
			'padding',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'margin',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'border',
			'border-top',
			'border-right',
			'border-bottom',
			'border-left',
			'border-width',
			'border-radius',
			'border-color',
			'outline',
			'position',
			'top',
			'right',
			'bottom',
			'left',
			'z-index',
			'box-sizing',
			'box-shadow',
			'display',
			'flex',
			'flex-shrink',
			'flex-grow',
			'flex-direction',
			'flex-wrap',
			'vertical-align',
			'visibility',
			'transform',
			'transform-origin',
			'transform-style',
			'opacity',
			'backface-visibility',
			'transition',
			'animation',
			'will-change',
			'filter',
			'overflow',
			'overflow-x',
			'overflow-y',
			'scroll-behavior',
			'overscroll-behavior'
		],
		'at-rule-empty-line-before': [
			'always', {
				'except': [
					'blockless-after-same-name-blockless',
					'first-nested'
				],
				'ignore': ['after-comment']
			}
		],
		'at-rule-name-case': 'lower',
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-semicolon-newline-after': 'always',
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always-multi-line',
		'block-closing-brace-space-before': 'always-single-line',
		'block-no-empty': true,
		'block-opening-brace-newline-after': 'always-multi-line',
		'block-opening-brace-space-after': 'always-single-line',
		'block-opening-brace-space-before': 'always',
		'color-hex-case': 'lower',
		'color-hex-length': 'short',
		'color-no-invalid-hex': true,
		'comment-empty-line-before': [
			'always', {
				'except': ['first-nested'],
				'ignore': ['stylelint-commands']
			}
		],
		'comment-no-empty': true,
		'comment-whitespace-inside': 'always',
		'custom-property-empty-line-before': [
			'always', {
				'except': [
					'after-custom-property',
					'first-nested'
				],
				'ignore': [
					'after-comment',
					'inside-single-line-block'
				]
			}
		],
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-block-no-duplicate-properties': [
			true, {
				'ignore': ['consecutive-duplicates-with-different-values']
			}
		],
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-semicolon-newline-after': 'always-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': 1,
		'declaration-block-trailing-semicolon': 'always',
		'declaration-colon-newline-after': 'always-multi-line',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-empty-line-before': [
			'always', {
				'except': [
					'after-declaration',
					'first-nested'
				],
				'ignore': [
					'after-comment',
					'inside-single-line-block'
				]
			}
		],
		'font-family-no-duplicate-names': true,
		'function-calc-no-unspaced-operator': true,
		'function-comma-newline-after': 'always-multi-line',
		'function-comma-space-after': 'never',
		'function-comma-space-before': 'never',
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-max-empty-lines': 0,
		'function-name-case': 'lower',
		'function-parentheses-newline-inside': 'always-multi-line',
		'function-parentheses-space-inside': 'never-single-line',
		'function-whitespace-after': 'always',
		'keyframe-declaration-no-important': true,
		'length-zero-no-unit': true,
		'max-empty-lines': 1,
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-case': 'lower',
		'media-feature-name-no-unknown': true,
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-space-after': 'always-single-line',
		'media-query-list-comma-space-before': 'never',
		'no-empty-source': true,
		'no-eol-whitespace': true,
		'no-extra-semicolons': true,
		'no-invalid-double-slash-comments': true,
		'no-missing-end-of-source-newline': true,
		'number-leading-zero': 'always',
		'number-no-trailing-zeros': true,
		'property-case': 'lower',
		'rule-empty-line-before': [
			'always-multi-line', {
				'except': ['first-nested'],
				'ignore': ['after-comment']
			}
		],
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-list-comma-space-before': 'never',
		'selector-max-empty-lines': 0,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'double',
		'selector-pseudo-class-no-unknown': [
			true,
			{
				'ignorePseudoClasses': [
					'global',
					'local'
				]
			}
		],
		'selector-type-case': 'lower',
		'selector-type-no-unknown': true,
		'shorthand-property-no-redundant-values': true,
		'string-no-newline': true,
		'unit-case': 'lower',
		'unit-no-unknown': true,
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': 0
	}
};
