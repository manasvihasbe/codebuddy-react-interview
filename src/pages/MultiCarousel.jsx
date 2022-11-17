import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import '../styles/index.css';

function MultiCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="MultiCarousel">
        <div style={{ position: 'relative' }}>
          <Carousel responsive={responsive}>
            <div>
              <Card style={{ width: '90%', height: '5.5rem' }}>
                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
                  <a
                    href="https://www.msn.com/en-in/news/other/delhi-murder-aftab-used-to-slap-the-severed-head-of-shraddha-kept-in-fridge-unlimited-cruelty-inside-hate-story-2022/ar-AA14b3ua?ocid=BingHPCNews&cvid=9e56b656b2ca47e1fb3d430a98787b23"
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: 150, textDecoration: 'none', color: 'white' }}
                  >
                    Rajiv Gandhi killers released, now set me free too: Life convict to Supreme
                    Court
                  </a>
                </Card.Header>
                <Card.Img
                  variant="bottom"
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14bZfJ.img?w=768&h=432&m=6"
                />
              </Card>
            </div>
            <div>
              <Card style={{ width: '90%', height: '5.5rem' }}>
                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
                  <a
                    href="https://www.msn.com/en-in/news/other/delhi-murder-aftab-used-to-slap-the-severed-head-of-shraddha-kept-in-fridge-unlimited-cruelty-inside-hate-story-2022/ar-AA14b3ua?ocid=BingHPCNews&cvid=9e56b656b2ca47e1fb3d430a98787b23"
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: 150, textDecoration: 'none', color: 'white' }}
                  >
                    Delhi Murder: Aftab used to SLAP the severed head of Shraddha kept in fridge,
                    Unlimited CRUELTY inside Hate Story 2022
                  </a>
                </Card.Header>
                <Card.Img
                  variant="bottom"
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14aKFJ.img?w=612&h=344&m=6&x=110&y=92&s=296&d=315"
                />
              </Card>
            </div>
            <div>
              <Card style={{ width: '90%', height: '5.5rem' }}>
                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
                  <a
                    href="https://www.msn.com/en-in/lifestyle/family/lucknow-daughter-of-senior-army-officer-abducted-in-car-2-attackers-tear-her-clothes-molest-her/ar-AA14cpUv?ocid=BingHPCNews&cvid=9e56b656b2ca47e1fb3d430a98787b23"
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: 150, textDecoration: 'none', color: 'white' }}
                  >
                    Lucknow: Daughter of senior Army officer abducted in car; 2 attackers tear her
                    clothes, molest her
                  </a>
                </Card.Header>
                <Card.Img
                  variant="bottom"
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14cmCF.img?w=768&h=432&m=6"
                />
              </Card>
            </div>
            <div>
              <Card style={{ width: '90%', height: '5.5rem' }}>
                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
                  <a
                    href="https://www.msn.com/en-in/news/other/delhi-crime-aftab-and-shraddha-fought-over-expenses-before-murder-cops-find-blood-stains-in-kitchen/ar-AA14cFbR?ocid=BingHPCNews&cvid=9e56b656b2ca47e1fb3d430a98787b23"
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: 150, textDecoration: 'none', color: 'white' }}
                  >
                    Delhi Crime: Aftab and Shraddha fought over expenses before murder, cops find
                    blood stains in kitchen
                  </a>
                </Card.Header>
                <Card.Img
                  variant="bottom"
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14cJUO.img?w=768&h=432&m=6&x=744&y=126&s=197&d=197"
                />
              </Card>
            </div>
            <div>
              <Card style={{ width: '90%', height: '5.5rem' }}>
                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
                  <a
                    href="https://www.msn.com/en-in/news/other/veer-savarkar-s-grandson-to-file-case-against-rahul-gandhi-for-insulting-freedom-fighter/ar-AA14crmE?ocid=BingHPCNews&cvid=9e56b656b2ca47e1fb3d430a98787b23"
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: 150, textDecoration: 'none', color: 'white' }}
                  >
                    Veer Savarkar&apos;s grandson to file CASE against Rahul Gandhi for INSULTING
                    freedom fighter
                  </a>
                </Card.Header>
                <Card.Img
                  variant="bottom"
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14cki2.img?w=768&h=432&m=6&x=10&y=131&s=578&d=198"
                />
              </Card>
            </div>
            <div>
              <Card style={{ width: '90%', height: '5.5rem' }}>
                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
                  <a
                    href="https://www.msn.com/en-in/news/world/joe-biden-congrats-republicans-for-gaining-control-of-house-says-ready-to-work-with-anyone-to-deliver-results/ar-AA14ciC4?ocid=BingHPCNews&cvid=9e56b656b2ca47e1fb3d430a98787b23"
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: 150, textDecoration: 'none', color: 'white' }}
                  >
                    Joe Biden congrats Republicans for gaining control of House says, ready to work
                    with anyone to deliver results
                  </a>
                </Card.Header>
                <Card.Img
                  variant="bottom"
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14ct5o.img?w=768&h=432&m=6&x=213&y=68&s=736&d=263"
                />
              </Card>
            </div>
            <div>
              <Card style={{ width: '90%', height: '5.5rem' }}>
                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
                  <a
                    href="https://www.msn.com/en-in/news/other/delhi-murder-case-dog-squad-roped-into-hunt-for-body-parts/ar-AA14cjJo?ocid=BingHPCNews&cvid=9e56b656b2ca47e1fb3d430a98787b23"
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: 150, textDecoration: 'none', color: 'white' }}
                  >
                    Delhi murder case: Dog squad roped into hunt for body parts
                  </a>
                </Card.Header>
                <Card.Img
                  variant="bottom"
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14ctdh.img?w=768&h=432&m=6&x=280&y=36&s=163&d=144"
                />
              </Card>
            </div>
            <div>
              <Card style={{ width: '90%', height: '5.5rem' }}>
                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
                  <a
                    href="https://www.msn.com/en-in/news/world/watch-chinese-president-xi-canadian-pm-trudeau-get-into-heated-argument-jinping-accuses-justin-of-leaking-information-to-media/ar-AA14cAl7?ocid=BingHPCNews&cvid=9e56b656b2ca47e1fb3d430a98787b23"
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: 150, textDecoration: 'none', color: 'white' }}
                  >
                    WATCH: Chinese President Xi, Canadian PM Trudeau get into heated argument;
                    Jinping accuses Justin of leaking information to media
                  </a>
                </Card.Header>
                <Card.Img
                  variant="bottom"
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14cn8C.img?w=768&h=432&m=6&x=704&y=200&s=165&d=165"
                />
              </Card>
            </div>
            <div>
              <Card style={{ width: '90%' }}>
                <Card.Header style={{ backgroundColor: 'black', color: 'white' }}>
                  <a
                    href="https://www.msn.com/en-in/money/news/petrol-diesel-prices-today-november-17-check-latest-fuel-rates-in-noida-lucknow-delhi-bengaluru-patna-chandigarh-and-other-cities/ar-AA14cuTG?ocid=BingHPCNews&cvid=9e56b656b2ca47e1fb3d430a98787b23"
                    className="d-inline-block text-truncate"
                    style={{ maxWidth: 150, textDecoration: 'none', color: 'white' }}
                  >
                    Petrol-Diesel Prices Today, November 17: Check latest fuel rates in Noida,
                    Lucknow, Delhi, Bengaluru, Patna, Chandigarh and other cities
                  </a>
                </Card.Header>
                <Card.Img
                  variant="bottom"
                  src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14cH8B.img?w=700&h=394&m=6"
                />
              </Card>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default MultiCarousel;
