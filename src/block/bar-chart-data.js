/**
 * 
 * Child Block of Bar Chart Block
 * 
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import { TextControl } from '@wordpress/components';

//const ALLOWED_BLOCKS = [ '' ];
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-bar-chart-data', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'bar-chart-data' ), // Block title.
	icon: 'screenoptions', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	parent: [ 'cgb/block-bar-chart' ],
    category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	attributes: {
        dataLabel:{
            type: 'string',
        },
        dataValue:{
            type: 'number',
        }
    },
    keywords: [
		__( 'bar' ),
		__( 'chart' ),
		__( 'graph' ),
        __( 'data' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
        const { 
			attributes: { dataLabel,dataValue }, 
			setAttributes 
		} = props;

		return (
			<div className={ props.className }>
				<h3>Add Data Set</h3>
                <div className="data">
                    <div className="data-label">
                        <TextControl
                            label="Data Label"
                            value={ dataLabel }
                            onChange={ (newDataLabel) => { setAttributes({dataLabel: newDataLabel}); } }
                            type="string"
                        />
                    </div>
                    <div className="data-value">
                        <TextControl
                            label="Data Value"
                            value={ dataValue }
                            onChange={ (newDataValue) => { setAttributes({dataValue: parseInt(newDataValue)}); } }
                            type="number"
                        />
                    </div>
                </div>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
        const {
            attributes: {dataLabel,dataValue}
        } = props;
		return (
			<React.Fragment>  
                <tr><th className="data-label">{dataLabel}</th></tr>
                <tr><td className="data-value">{dataValue}</td></tr>
            </React.Fragment>
		);
	},
} );