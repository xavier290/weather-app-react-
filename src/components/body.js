

function body({weatherData}) {
    return (
        <main className="body">
            {JSON.stringify(weatherData.name)}
            <p>this is the body</p>
        </main>
    )
}

export default body;