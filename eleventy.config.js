import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('src/css');
eleventyConfig.addWatchTarget('src/css');
eleventyConfig.addPassthroughCopy('src/assets');


	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		 // which file extensions to process
	    //extensions: ['html', 'md'],
	    // optional, output image formats
	    formats: ['jpg', 'webp', 'png'],
	    widths: ['auto']
	    
	});

	return {
	    dir: {
	        input: 'src',
	    },
	};

};