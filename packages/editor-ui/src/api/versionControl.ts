import type { IRestApiContext } from '@/Interface';
import { makeRestApiRequest } from '@/utils';
import type { IDataObject } from 'n8n-workflow';

const versionControlApiRoot = '/version-control';

export const initSsh = (context: IRestApiContext, data: IDataObject): Promise<string> => {
	return makeRestApiRequest(context, 'POST', `${versionControlApiRoot}/init-ssh`, data);
};

export const initRepository = (
	context: IRestApiContext,
): Promise<{ branches: string[]; currentBranch: string }> => {
	return makeRestApiRequest(context, 'POST', `${versionControlApiRoot}/init-repository`);
};

export const sync = (context: IRestApiContext, data: IDataObject): Promise<void> => {
	return makeRestApiRequest(context, 'POST', `${versionControlApiRoot}/push`, data);
};

export const getConfig = (
	context: IRestApiContext,
): Promise<{ remoteRepository: string; name: string; email: string; currentBranch: string }> => {
	return makeRestApiRequest(context, 'GET', `${versionControlApiRoot}/config`);
};