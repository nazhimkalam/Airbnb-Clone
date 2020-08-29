import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';

function Home() {
	return (
		<div className="home">
			<Banner />
			<div className="home__section">
				<Cards 
                    src = "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=320"
                    title = "Online Experiences"
                    description = "Unique activities we can do together, led by a world of hosts."
                />
				<Cards 
                    src = "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=320"
                    title = "Unique stays"
                    description = "Spaces that are more than just a place to sleep."
                />
                <Cards 
                    src = "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=320"
                    title = "Entire homes"
                    description = "Comfortable private places, with room for friends or family."
                />
			</div>
			<div className="home__section">
            <Cards 
                    src = "https://a0.muscache.com/im/pictures/46251622-d87d-430e-b4a9-33c22a26f620.jpg?im_w=320"
                    title = "Surprising stays next door"
                    description = "Find unique spaces nearby that turn any trip into an adventure."
                />
                <Cards 
                    src = "https://a0.muscache.com/im/pictures/a88e5857-39fc-4e05-a9fe-75e846a89651.jpg?im_w=320"
                    title = "Remote discoveries for two"
                    description = "Get off the beaten path together in these scenic escapes near you."
                />
                <Cards 
                    src = "https://a0.muscache.com/im/pictures/9188933d-6b73-4195-8de9-c855cad4c97d.jpg?im_w=320"
                    title = "Otherworldy national parks."
                    description = "Find new worlds next door with Airbnb and the National Park Foundation."
                />
			</div>
		</div>
	);
}

export default Home;
