
function fetchUserData(userId, successCallback, errorCallback) {
    setTimeout(() => {
        const mockDatabase = {
            1: { id: 1, name: 'Alice' },
            2: { id: 2, name: 'Bob' },
            3: { id: 3, name: 'Charlie' }
        };
        const shouldFail = Math.random() > 0.7;

        if (shouldFail) {
            errorCallback(`Error: User with ID ${userId} not found.`);
        } else {
            const userData = mockDatabase[userId];
            if (userData) {
                successCallback(userData);
            } else {
                errorCallback(`Error: User with ID ${userId} does not exist.`);
            }
        }
    }, 2000);
}


function handleSuccess(userData) {
    console.log('User data fetched successfully:', userData);
}


function handleError(errorMessage) {
    console.log(errorMessage);
}


const userIdToFetch = 1;
fetchUserData(userIdToFetch, handleSuccess, handleError);
