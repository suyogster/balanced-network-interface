import { SupportedChainId as ChainId } from '@balancednetwork/balanced-js';
import { Token } from '@balancednetwork/sdk-core';

import { ICX, sICX, bnUSD, IUSDC, USDS, OMM, IUSDT } from './tokens';

export const MAX_HOPS = 4;

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: { [chainId: number]: Token[] } = {
  [ChainId.MAINNET]: [sICX[ChainId.MAINNET], bnUSD[ChainId.MAINNET], IUSDC[ChainId.MAINNET], USDS[ChainId.MAINNET]],
  [ChainId.YEOUIDO]: [sICX[ChainId.YEOUIDO], bnUSD[ChainId.YEOUIDO], IUSDC[ChainId.YEOUIDO], USDS[ChainId.YEOUIDO]],
  [ChainId.SEJONG]: [sICX[ChainId.SEJONG], bnUSD[ChainId.SEJONG]],
  [ChainId.BERLIN]: [sICX[ChainId.BERLIN], bnUSD[ChainId.BERLIN], IUSDC[ChainId.BERLIN], USDS[ChainId.BERLIN]],
};
export const ADDITIONAL_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    [IUSDC[ChainId.MAINNET].address]: [OMM[ChainId.MAINNET], IUSDT[ChainId.MAINNET]],
    [sICX[ChainId.MAINNET].address]: [OMM[ChainId.MAINNET], IUSDT[ChainId.MAINNET]],
  },
};
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId: number]: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
};

type ChainTokenList = {
  readonly [chainId: number]: Token[];
};

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [sICX[ChainId.MAINNET], bnUSD[ChainId.MAINNET], IUSDC[ChainId.MAINNET], USDS[ChainId.MAINNET]],
  [ChainId.YEOUIDO]: [sICX[ChainId.YEOUIDO], bnUSD[ChainId.YEOUIDO], IUSDC[ChainId.YEOUIDO], USDS[ChainId.YEOUIDO]],
  [ChainId.SEJONG]: [sICX[ChainId.SEJONG], bnUSD[ChainId.SEJONG]],
  [ChainId.BERLIN]: [sICX[ChainId.BERLIN], bnUSD[ChainId.BERLIN]],
};
export const PINNED_PAIRS: { readonly [chainId: number]: [Token, Token][] } = {
  [ChainId.MAINNET]: [[ICX[ChainId.MAINNET], sICX[ChainId.MAINNET]]],
  [ChainId.YEOUIDO]: [[ICX[ChainId.YEOUIDO], sICX[ChainId.YEOUIDO]]],
  [ChainId.SEJONG]: [[ICX[ChainId.SEJONG], sICX[ChainId.SEJONG]]],
  [ChainId.BERLIN]: [[ICX[ChainId.BERLIN], sICX[ChainId.BERLIN]]],
};
