function isInIframeAndSameDomain() {
    try {
        // Check if the current page is within an iframe
        if (window.self !== window.parent) {
            // Check if the parent page (window.parent) is from the same domain
            if (window.parent.location.hostname === window.location.hostname) {
                return {
                    inIframe: true,
                    sameDomain: true
                };
            } else {
                return {
                    inIframe: true,
                    sameDomain: false
                };
            }
        } else {
            // The page is not in an iframe
            return {
                inIframe: false,
                sameDomain: false
            };
        }
    } catch (e) {
        // If accessing window.parent.location.hostname throws an error, 
        // it means the iframe is on a different domain
        return {
            inIframe: true,
            sameDomain: false
        };
    }
}

// Call the function and check the result
const result = isInIframeAndSameDomain();

if (result.inIframe && !result.sameDomain) {
    // Redirect to pre.html if the page is in an iframe and not on the same domain
	console.log("pre");
    window.location.href = './pre.html';
}
