export const formatReadableDate = (isoString) => {
    const date = new Date(isoString);
    
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    };

    return date.toLocaleString('en-US', options);
} 