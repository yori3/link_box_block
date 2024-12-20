/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
    TextControl,
    ToggleControl,
    PanelBody
} from '@wordpress/components';
import {
  useBlockProps,
  InnerBlocks,
  InspectorControls,
  BlockControls,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

const MY_TEMPLATE = [
  [ 'core/paragraph', { placeholder: 'content' } ],
];
const ALLOWED_BLOCKS = ['core/heading' ,'core/image', 'core/paragraph' ];
export default function Edit({ attributes, setAttributes }) {
    
  return (
		<>
        <div { ...useBlockProps() }>
            <InspectorControls key="setting">
                <PanelBody title={'リンク'}>
                    <div id="linkSet">
                        <fieldset>
                            <TextControl
                                label = {__('リンク先')}
                                value = { attributes.href }
                                onChange = { (newHref) => {
                                    setAttributes({href: newHref})
                                }}
                            />
                        </fieldset>
                        <fieldset>
                            <ToggleControl
                                label={__('別タブで開く')}
                                checked={ attributes.target }
                                onChange={ (newTarget) => {
                                    setAttributes({target: newTarget})
                                }}
                            />
                        </fieldset>
                    </div>
                </PanelBody>
            </InspectorControls>
            <InnerBlocks 
                orientation="horizontal" 
                allowedBlocks={ ALLOWED_BLOCKS } 
                href={ attributes.href }
                target={ attributes.target}
                template={ MY_TEMPLATE }
            />
        </div>
    </>
    );
}
