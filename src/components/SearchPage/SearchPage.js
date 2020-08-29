import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from '../SearchResult/SearchResult';

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__info">
				<p>62 stays • 26 august to 30 august • 2 guest</p>
				<h1>Stays nearby</h1>
				<Button variant="outlined">Cancellation</Button>
				<Button variant="outlined">Type of place</Button>
				<Button variant="outlined">Price</Button>
				<Button variant="outlined">Rooms and beds</Button>
				<Button variant="outlined">More filters</Button>
			</div>
			<SearchResult
				img="https://blog.modsy.com/wp-content/uploads/2018/03/D1-Aedit-1.jpg"
				location="Private room in center of London"
				title="Stay at this spacious Edwardian House"
				description="1 guest • 1 bedrooms • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
				star={4.73}
				price="$60 / night"
				total="$117 total"
			/>
			<SearchResult
				img=" https://i.pinimg.com/originals/e2/1d/a0/e21da08fe89276291bc3db428b324aa5.png "
				location=" Comfortable full room set in Mexico "
				title=" 5 Star Luxury Apartment "
				description="1 guest • 1 bedrooms • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
				star={3.23}
				price=" $25 / night "
				total=" $89 total "
			/>
			<SearchResult
				img=" https://s3-us-west-2.amazonaws.com/sq1-wordpress-test/wp-content/uploads/2019/11/18032214/Layout-ideas-for-master-bedroom-in-home.jpg "
				location=" Bedroom Interior Design in Dubai by Luxury Antonovich Design center of India"
				title=" Stay at this spacious Edwardian House "
				description="1 guest • 1 bedrooms • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
				star={4.22}
				price=" $50 / night "
				total=" $110 total "
			/>
			<SearchResult
				img=" https://cdn.home-designing.com/wp-content/uploads/2018/10/white-marble-and-wood-master-bedroom-luxury-bedroom-decor-ideas-chevron-wood-floor.jpg "
				location=" Serene Bedroom Designs in Australia "
				title=" 5 Star Luxury Apartment "
				description="1 guest • 1 bedrooms • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
				star={4.99}
				price=" $100 / night "
				total=" $355 total "
			/>
			<SearchResult
				img=" https://i.pinimg.com/originals/1b/69/bf/1b69bfb5528b92f56db8d18b61d29c2a.jpg "
				location=" Best Master Bedroom in Canada "
				title=" Stay at this spacious Edwardian House "
				description="1 guest • 1 bedrooms • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
				star={3.36}
				price=" $10 / night "
				total=" $100 total "
			/>
			<SearchResult
				img=" https://www.dkorinteriors.com/wp-content/uploads/2019/02/Luxury-Interior-Design-Palm-Beach-Master-Bedroom.jpg "
				location=" Serene Bedroom Designs in Saudi "
				title=" 5 Star Luxury Apartment "
				description="1 guest • 1 bedrooms • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
				star={2.23}
				price=" $18 / night "
				total=" $121 total "
			/>
			<SearchResult
				img=" https://designingidea.com/wp-content/uploads/2017/02/luxury-bedroom-with-maple-hardwood-floors-and-sleigh-bed.jpg "
				location=" Private room in center of SriLanka "
				title=" Stay at this spacious Edwardian House "
				description="1 guest • 1 bedrooms • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
				star={4.99}
				price=" $90 / night "
				total=" $147 total "
			/>
			<SearchResult
				img=" https://housance.com/wp-content/uploads/2019/07/LED-light-striped-bedroom-unique-accent-walls.jpg "
				location=" Serene Bedroom Designs in Australia "
				title=" 5 Star Luxury Apartment "
				description="1 guest • 1 bedrooms • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
				star={3.26}
				price=" $80 / night "
				total=" $150 total "
			/>
			<SearchResult
				img=" https://antonovich-design.ae/uploads/page/2019/12/antonovich-design-thumb2019Oghqu1G9l4SZ.jpg "
				location=" Serene Bedroom Designs in India "
				title=" Stay at this spacious Edwardian House "
				description="1 guest • 1 bedrooms • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
				star={4.99}
				price=" $70 / night "
				total=" $168 total "
			/>
			<SearchResult
				img=" https://www.thespruce.com/thmb/pDD98hnGCjytOuOxJUYt9vp-jag=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/Stocksy_txp6145e527HXb200_Medium_2521696-9271b058e379443192425d55ae0cdd5f-97e3f2daa40246ffa79c2b4de9580272.jpg "
				location=" Private room in center of Dubai "
				title=" 5 Star Luxury Apartment "
				description="1 guest • 1 bedrooms • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
				star={4.57}
				price=" $60 / night "
				total=" $175 total "
			/>
		</div>
	);
}

export default SearchPage;
