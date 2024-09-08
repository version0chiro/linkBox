import { createInstance } from "../utils/pb";

interface link {
    name: string,
    url: string
}

export const pushLinkBoxForUserID = (
    boxName: string,
    links: link[],
    userID: string
) => {
    const pb = createInstance();
    const data = {
        "title": boxName,
        "links": links,
        "userID": userID
    };
    const record = pb.collection('linkBoxes').create(data);
    return record;
}