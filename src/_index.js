/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps,
    RichText,
    AlignmentToolbar,
    BlockControls,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
  // apiVersion: 3,
  // title: 'Example: Editable (esnext)',
  // icon: 'universal-access-alt',
  // category: 'design',
  // attributes: {
  //     content: {
  //         type: 'string',
  //         source: 'html',
  //         selector: 'p',
  //     },
  // },
  // example: {
  //     attributes: {
  //         content: 'Hello World',
  //     },
  // },
  // edit: ( props ) => {
  //     const {
  //         attributes: { content },
  //         setAttributes,
  //         className,
  //     } = props;
  //     const blockProps = useBlockProps();
  //     const onChangeContent = ( newContent ) => {
  //         setAttributes( { content: newContent } );
  //     };
  //     return (
  //         <RichText
  //             { ...blockProps }
  //             tagName="p"
  //             onChange={ onChangeContent }
  //             value={ content }
  //         />
  //     );
  // },
  // save: ( props ) => {
  //     const blockProps = useBlockProps.save();
  //     return (
  //         <RichText.Content
  //             { ...blockProps }
  //             tagName="p"
  //             value={ props.attributes.content }
  //         />
  //     );
  // },
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
