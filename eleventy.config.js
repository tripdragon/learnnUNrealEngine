// import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('src/css');
	eleventyConfig.addWatchTarget('src/css');
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPlugin(HtmlBasePlugin);


	// this thing is a mess, dont use
	// eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
	// 	 // which file extensions to process
	//     //extensions: ['html', 'md'],
	//     // optional, output image formats
	//     formats: ['jpg', 'webp', 'png'],
	//     widths: ['auto']
	// });

	// instead just copy the imgs folders and then
	eleventyConfig.addPassthroughCopy("src/posts/**/imgs");
	// <img class="block" src="{{ '../imgs/state1.jpg' | url }}" alt="skjfd" width=400 />
	// go up one dir since each post is a folder and we dont know it yet
	// so this works and works for github!!

	return {
	    dir: {
	        input: 'src'
	    },
		pathPrefix: "/learnnUNrealEngine/"

	};

};