export const get = async ({ url }) => {
    const name = url.searchParams.get('name');
    const email = url.searchParams.get('email');
    console.log('get');
    return {
        status: 303,
        headers: {
            location: '/',
        },

        body: { name, email }

    }

}



// status 303: redirects to headers location, bij redirect moet status 303 worden
// status 400: verwerkt


export const post = async ({ request }) => {
    console.log('post')
    const form = await request.formData();
    for (const pair of form.entries()) {
        console.log(pair[0])
    }


    return {
        status: 400,
        body: {
            name: form.get('name'),
            email: form.get('email')
        }
    }
}

/*pos: formData() bevat de info in een map. komt later dus await ervoor zetten
    de for loop loopt door alle entries heen

links
https://developer.mozilla.org/en-US/docs/Web/API/Request/url
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
https://developer.mozilla.org/en-US/docs/Web/API/FormData