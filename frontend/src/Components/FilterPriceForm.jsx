export default function FilterPriceForm({handleFilterPrice}) {
    return <div>
        <h3>Filter Price</h3>
        <form>
            <input type="radio" name="filter-price" id="all" value="all" onChange={handleFilterPrice}/>
            <label htmlFor="all">Show All</label><br/>
            <input type="radio" name="filter-price" id="f1.00" value={1.00} onChange={handleFilterPrice}/>
            <label htmlFor="f1.00">{"< 1.00$"}</label><br/>
            <input type="radio" name="filter-price" id="f2.00" value={2.00} onChange={handleFilterPrice}/>
            <label htmlFor="f2.00">{"< 2.00$"}</label><br/>
            <input type="radio" name="filter-price" id="f4.00" value={4.00} onChange={handleFilterPrice}/>
            <label htmlFor="f4.00">{"< 4.00$"}</label><br/>
            <input type="radio" name="filter-price" id="f6.00" value={6.00} onChange={handleFilterPrice}/>
            <label htmlFor="f6.00">{"< 6.00$"}</label><br/>
            <input type="radio" name="filter-price" id="f9.00" value={9.00} onChange={handleFilterPrice}/>
            <label htmlFor="f9.00">{"< 9.00$"}</label><br/>
        </form>
    </div>
}