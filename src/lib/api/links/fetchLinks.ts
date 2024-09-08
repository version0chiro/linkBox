import { createInstance } from "../utils/pb";

const getMockLinks = () => {
    return [
        {
            id: 1,
            title: 'Google',
            url: 'https://www.google.com'
        },
        {
            id: 2,
            title: 'YouTube',
            url: 'https://www.youtube.com'
        },
        {
            id: 3,
            title: 'GitHub',
            url: 'https://www.github.com'
        },
        {
            id: 4,
            title: 'Stack Overflow',
            url: 'https://stackoverflow.com'
        },
        {
            id: 5,
            title: 'Mozilla Developer Network',
            url: 'https://developer.mozilla.org'
        }
    ];
}

export const getMockLinkBoxes = () => {
    const mockLinks = getMockLinks();
    const mockLinkBoxes = [];

    // Generate names for the link boxes
    const boxNames = ['Favorites', 'Work', 'Social', 'Learning', 'Entertainment'];

    for (let i = 0; i < mockLinks.length; i += 3) {
        const boxName = boxNames[i / 3] || `Box ${i / 3 + 1}`; // Use predefined names or default to "Box X"
        mockLinkBoxes.push({
            name: boxName,
            links: mockLinks.slice(i, i + 3)
        });
    }

    return mockLinkBoxes;
}

export const getLinkBoxesForUserID = (userID: string) => {
    const pb = createInstance();
    const records = pb.collection('linkBoxes').getFullList({
        filter: `userID="${userID}"`
    });
    console.log(records)
    return records;
}

export const getLinkBoxFromBoxID = (boxID: string) => {
    const pb = createInstance();
    const record = pb.collection('linkBoxes').getOne(boxID);
    console.log(record)
    return record;
}
