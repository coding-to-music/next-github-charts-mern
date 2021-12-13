import { connectToDatabase } from '../../../../config/mongodbClient';
import { RequestMethods } from '../../../../lib/constants/httpRequestMethods';
import ObjectID from 'bson-objectid';
import { StatusCodes } from 'http-status-codes';
import { userPageSettingsCollection } from '../../../../entities/UserPageSettings';
import {
    createMethodHandler,
    createRootHandler,
    CreateRootHandlerParams,
    RequestMethodHandler,
} from '../../../../lib/types/requests';

const handleGetRequest: RequestMethodHandler = async (req, res) =>
    createMethodHandler({
        requireToken: false,
        callback: async (request, response) => {
            const { userId } = request.query;
            const resolvedUserId =
                typeof userId === 'string' ? userId : userId[0];
            const { db } = await connectToDatabase();
            const result = await db
                .collection(userPageSettingsCollection)
                .findOne({ userId: new ObjectID(resolvedUserId) });

            if (!result) response.status(StatusCodes.NOT_FOUND).json(null);
            else response.status(StatusCodes.OK).json(result);
        },
    })(req, res);

const requestMethodHandlers: CreateRootHandlerParams = {
    [RequestMethods.GET]: handleGetRequest,
};

export default createRootHandler(requestMethodHandlers);
