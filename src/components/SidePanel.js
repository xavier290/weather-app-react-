

const SidePanel = () => {
    return (
        <section className="sidePanel">
            <form className="search">
                <input 
                    type="text" 
                    autoComplete="off" 
                    placeholder="Another location"
                />
                <input type="submit"/>
            </form>
            <article className="popular-cities">
                <p>Bangkok</p>
                <p>Paris</p>
                <p>London</p>
                <p>Dubai</p>
            </article>
            <article className="weather-details">
                {/* here i will embed the component for the weather info */}
            </article>
        </section>
    )
}

export default SidePanel;