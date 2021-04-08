/**
 * 
 * Bar Chart Parent Block
 * 
 */
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { TextControl, CheckboxControl, Panel, PanelBody, PanelRow } from '@wordpress/components';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const ALLOWED_BLOCKS = [ 'cgb/block-bar-chart-data' ];
/**
 * Register: Bar Chart Block
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
registerBlockType( 'cgb/block-bar-chart', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'bar-chart' ), // Block title.
	icon: 'chart-bar', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	attributes: {
		blockID:{
			type: 'string'
		},
		chartTitle:{
			type: 'string'
		},
		showTitle:{
			type: 'boolean',
			default: false,
		},
		indexAxis:{
			type: 'boolean',
			default: false,
		}
	},
	keywords: [
		__( 'bar' ),
		__( 'chart' ),
		__( 'graph' ),
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
			attributes: { 
				blockID, 
				chartTitle,
				showTitle,
				indexAxis
			},
			setAttributes,
			clientId
		} = props;
		if ( ! blockID ) {
			setAttributes( { blockID: clientId } );
		}

		return (
			<div className={ props.className } id={blockID}>
				{
					<InspectorControls>
						<Panel header="Chart Block Settings">
							<PanelBody title="Display Settings">
								<PanelRow>
									<div className="chart_hide-title">
										<CheckboxControl
											label="Hide Chart Title"
											help="Check to display the chart title"
											checked={ showTitle }
											onChange={ (newValue) => { setAttributes({showTitle: newValue}); } }
										/>
									</div>
								</PanelRow>
								<PanelRow>
									<div className="chart_axis">
										<CheckboxControl
											label="Horizontal Chart"
											help="Check to display the chart horizontally"
											checked={ indexAxis }
											onChange={ (newValue) => { setAttributes({indexAxis: newValue}); } }
										/>
									</div>
								</PanelRow>
							</PanelBody>
						</Panel>
					</InspectorControls>
				}
				<h2>Bar Chart Block</h2>
				<TextControl
					label="Chart Title"
					value={ chartTitle }
					onChange={ (newChartTitle) => { setAttributes({chartTitle: newChartTitle}); } }
					type="string"
				/>
                <InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
				/>
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
			attributes: {  
				blockID, 
				chartTitle,
				showTitle,
				indexAxis  
			}
		} = props;

		var displayTitle = chartTitle;
		if (showTitle) {
			displayTitle = '';
		}

		var chartIndexAxis = 'x';
		if (indexAxis) {
			chartIndexAxis = 'y';
		}

		return (
			<div className={ props.className } id={blockID} data-axis={chartIndexAxis}>
				<h3>{displayTitle}</h3>
				<canvas className="bar-chart">
					<table>
						<caption>{chartTitle}</caption>
						<InnerBlocks.Content />
					</table>
				</canvas>				
			</div>
		);
	},
} );