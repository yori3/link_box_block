/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
// import { registerBlockType } from '@wordpress/blocks';
// import {
//     useBlockProps,
//     RichText,
//     AlignmentToolbar,
//     BlockControls,
// } from '@wordpress/block-editor';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
 
import {
    InnerBlocks,
    useBlockProps,
    ColorPalette,
    InspectorControls,
    RichText
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

 
// const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];
// const MY_TEMPLATE = [
//   [ 'core/image', {} ],
//   [ 'core/heading', { placeholder: 'Book Title' } ],
//   [ 'core/paragraph', { placeholder: 'Summary' } ],
// ];


// registerBlockType( 'gutenberg-examples/example-03-editable-esnext', {
//   apiVersion: 3,
//   title: 'Example: Basic with block supports',
//   icon: 'universal-access-alt',
//   category: 'design',
//   attributes: {
//       content: {
//           type: 'string',
//           source: 'html',
//           selector: 'p',
//       },
//   },
//   example: {
//       attributes: {
//           content: 'Hello World',
//       },
//   },
//   "supports": {
//       "color": {
//           "text": true,
//           "background": true,
//           "link": true
//       }
//   },
//   // edit: ( props ) => {
//   //     const {
//   //         attributes: { content },
//   //         setAttributes,
//   //         className,
//   //     } = props;
//   //     const blockProps = useBlockProps();
//   //     const onChangeContent = ( newContent ) => {
//   //         setAttributes( { content: newContent } );
//   //     };
//   //     return (
//   //         <RichText
//   //             { ...blockProps }
//   //             tagName="p"
//   //             onChange={ onChangeContent }
//   //             value={ content }
//   //         />
//   //     );
//   // },
//   // save: ( props ) => {
//   //     const blockProps = useBlockProps.save();
//   //     return (
//   //         <RichText.Content
//   //             { ...blockProps }
//   //             tagName="p"
//   //             value={ props.attributes.content }
//   //         />
//   //     );
//   // },
//   edit: () => {
//     const blockProps = useBlockProps();

//     return (
//         <div { ...blockProps }>
//             {/* <InnerBlocks orientation="horizontal" allowedBlocks={ ALLOWED_BLOCKS } /> */}
//             <InnerBlocks
//                 template={ MY_TEMPLATE }
//                 templateLock="all"
//             />
//         </div>
        
//     );
// },

// save: () => {
//     const blockProps = useBlockProps.save();

//     return (
//         <div { ...blockProps }>
//             <InnerBlocks.Content />
//         </div>
//     );
// },
// } );


registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});