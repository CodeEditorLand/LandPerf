/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export enum Quality {
	/**
	 * Stable quality
	 */
	Stable = "stable",

	/**
	 * Insider quality
	 */
	Insider = "insider",

	/**
	 * Exploration quality
	 */
	Exploration = "exploration",
}

export interface Options {
	/**
	 * quality or the location of the build to measure the performance of. Location can be a path to a build or a URL to a build
	 */
	readonly build: string | Quality;

	/**
	 * Include unreleased builds in the search for the build to measure the performance of. Defaults to false.
	 */
	readonly unreleased?: boolean;

	/**
	 * pair of markers separated by `-` between which the duration has to be measured. Eg: `code/didLoadWorkbenchMain-code/didLoadExtensions
	 */
	readonly durationMarkers?: string | string[];

	/**
	 * file in which the performance measurements shall be recorded
	 */
	readonly durationMarkersFile?: string;

	/**
	 * number of times to run the performance measurement
	 */
	readonly runs?: string;

	/**
	 * folder to open in VSCode while measuring the performance
	 */
	readonly folder?: string;

	/**
	 * file to open in VSCode while measuring the performance
	 */
	readonly file?: string;

	/**
	 * logs verbose output to the console when errors occur
	 */
	readonly verbose?: boolean;

	/**
	 * file in which the profile data shall be recorded
	 */
	readonly profAppendTimers?: string;

	/**
	 * whether to measure the performance of desktop or web runtime. Defaults to desktop.
	 */
	readonly runtime?: "desktop" | "web";

	/**
	 * a GitHub token of scopes 'repo', 'workflow', 'user:email', 'read:user' to enable additional performance tests targetting web
	 */
	readonly token?: string;
}

export function run(options?: Options): Promise<void>;
