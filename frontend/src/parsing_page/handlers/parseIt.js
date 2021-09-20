const parseIt = (link, setLoad) => {
    setLoad(true);
    fetch('/parseSite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ link: link })
    })
        .then(res => {
            console.log(res);
        })
        .finally(() => {
            setLoad(false);
        })

}

export default parseIt;