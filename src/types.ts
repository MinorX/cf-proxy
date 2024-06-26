export interface Env {
	BASE: string;
	FEATURE_FLAGS: string;
	ON_DEMAND_HOST_CONFIG: string;
}

export interface Config {
	BASE: URL;
	FEATURE_FLAGS: {
		AD_BLOCKER_ENABLED: boolean;
		TEXT_REPLACER_ENABLED: boolean;
		ON_DEMAND_HOST_CONFIG_ENABLED: boolean;
	};
	ON_DEMAND_HOST: null | string;
}
