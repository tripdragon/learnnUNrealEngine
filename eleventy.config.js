import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('src/css');
	eleventyConfig.addWatchTarget('src/css');
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPlugin(HtmlBasePlugin);

	eleventyConfig.addPassthroughCopy('src/posts');


	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		 // which file extensions to process
	    //extensions: ['html', 'md'],
	    // optional, output image formats
	    formats: ['jpg', 'webp', 'png'],
	    widths: ['auto']
	    
	});

	return {
	    dir: {
	        input: 'src'
	    },
		pathPrefix: "/learnnUNrealEngine/"

	};

};