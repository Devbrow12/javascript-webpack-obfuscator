import { TIdentifierNamesCache } from '../../types/TIdentifierNamesCache';
import { TOptionsPreset } from '../../types/options/TOptionsPreset';
import { TStringArrayIndexesType } from '../../types/options/TStringArrayIndexesType';
import { TStringArrayEncoding } from '../../types/options/TStringArrayEncoding';
import { TStringArrayWrappersType } from '../../types/options/TStringArrayWrappersType';
import { TRenamePropertiesMode } from '../../types/options/TRenamePropertiesMode';
import { TTypeFromEnum } from '../../types/utils/TTypeFromEnum';

import { IdentifierNamesGenerator } from '../../enums/generators/identifier-names-generators/IdentifierNamesGenerator';
import { ObfuscationTarget } from '../../enums/ObfuscationTarget';
import { SourceMapMode } from '../../enums/source-map/SourceMapMode';
import { SourceMapSourcesMode } from '../../enums/source-map/SourceMapSourcesMode';

export interface IOptions {
    readonly compact: boolean;
    readonly controlFlowFlattening: boolean;
    readonly controlFlowFlatteningThreshold: number;
    readonly deadCodeInjection: boolean;
    readonly deadCodeInjectionThreshold: number;
    readonly debugProtection: boolean;
    readonly debugProtectionInterval: boolean;
    readonly disableConsoleOutput: boolean;
    readonly domainLock: string[];
    readonly domainLockRedirectUrl: string;
    readonly forceTransformStrings: string[];
    readonly identifierNamesCache: TIdentifierNamesCache;
    readonly identifierNamesGenerator: TTypeFromEnum<typeof IdentifierNamesGenerator>;
    readonly identifiersDictionary: string[];
    readonly identifiersPrefix: string;
    readonly ignoreImports: boolean;
    readonly inputFileName: string;
    readonly log: boolean;
    readonly numbersToExpressions: boolean;
    readonly optionsPreset: TOptionsPreset;
    readonly renameGlobals: boolean;
    readonly renameProperties: boolean;
    readonly renamePropertiesMode: TRenamePropertiesMode;
    readonly reservedNames: string[];
    readonly reservedStrings: string[];
    readonly seed: string | number;
    readonly selfDefending: boolean;
    readonly simplify: boolean;
    readonly sourceMap: boolean;
    readonly sourceMapBaseUrl: string;
    readonly sourceMapFileName: string;
    readonly sourceMapMode: TTypeFromEnum<typeof SourceMapMode>;
    readonly sourceMapSourcesMode: TTypeFromEnum<typeof SourceMapSourcesMode>;
    readonly splitStrings: boolean;
    readonly splitStringsChunkLength: number;
    readonly stringArray: boolean;
    readonly stringArrayEncoding: TStringArrayEncoding[];
    readonly stringArrayIndexesType: TStringArrayIndexesType[];
    readonly stringArrayIndexShift: boolean;
    readonly stringArrayRotate: boolean;
    readonly stringArrayShuffle: boolean;
    readonly stringArrayWrappersChainedCalls: boolean;
    readonly stringArrayWrappersCount: number;
    readonly stringArrayWrappersParametersMaxCount: number;
    readonly stringArrayWrappersType: TStringArrayWrappersType;
    readonly stringArrayThreshold: number;
    readonly target: TTypeFromEnum<typeof ObfuscationTarget>;
    readonly transformObjectKeys: boolean;
    readonly unicodeEscapeSequence: boolean;
}
