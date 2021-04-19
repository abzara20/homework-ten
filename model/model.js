var homeContent = ` <!-- this section displays the 3 promotional tours  -->
<section class="promo-tours">
    <div class="promo" id="promo-one">
        <h1>ISRAEL</h1>
        <h3>from $1000</h3>
        <button>LEARN MORE</button>
    </div>
    <div class="promo" id="promo-two">
        <h1>U.S.A</h1>
        <h3>from $1500</h3>
        <button>LEARN MORE</button>
    </div>
    <div class="promo" id="promo-three">
        <h1>AUSTRALIA</h1>
        <h3>from $1800</h3>
        <button>LEARN MORE</button>
    </div>
</section>

<!-- form section of the page, with all the inputs -->
<section class="booking-form">
    <div class="booking-container">
        <div class="title"><h1>Booking form</h1></div>

        <!-- this is the container that holds all the inputs for the booking form -->
        <div class="flex-container">
            <form>
                <div class="row flexible">
                    <input class="item spacer shorter"type="text" placeholder="name..">
                    <input class="item longer" type="email" placeholder="email..">
                </div>

                <div class="row flexible">
                    <input class="item spacer shorter" type="text" placeholder="country..">
                    <input class="item longer" type="text" placeholder="hotel..">
                </div>

                <div class="row">
                    <p>Check-in</p>
                    <input class="item timeframe" type="date">
                </div>

                <div class="row">
                    <p>Check-out</p>
                    <input class="item timeframe" type="date">
                </div>

                <div class="row">
                    <p>Adults</p>
                    <select class="item" name="adult" id="adult"></select>
                    <p>Children</p>
                    <select class="item" name="child" id="child"></select>
                    <p>Rooms</p>
                    <select class="item" name="room" id="room"></select>
                </div>

                <div class="row">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div class="submit row">
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
    
</section>`;
var aboutContent = `<div class="about">
    <div class="about-top-section">
        <h1>ABOUT: <br><hr></h1>

<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
</p>
</div>
<div class="about-bottom-section">

<h3>CLIENT QUOTES:</h3>

<hr>

<div class="client">
    <div class="client-image" id="client-1">
        <!-- <img src="" alt="client one"> -->
    </div>
    <div class="client-quote">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
            dicta sunt explicabo. 
        </p>

        <div class="client-name">
            <p>- Miranda Brown</p>
        </div>
    </div>
</div>
<div class="client">
    <div class="client-image" id="client-2">
        <!-- <img src="" alt="client one"> -->
    </div>
    <div class="client-quote">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
            dicta sunt explicabo. 
        </p>

        <div class="client-name">
            <p>- Johnathan wes</p>
        </div>
    </div>
</div>
</div>
</div>`;
var special_offersContent = `<div class="special-offers">
<div class="title">
    <h3>SPECIAL OFFERS:</h3>
    <hr>
</div>

<div class="offer-container">
    <div class="img-container barcelona"></div>
    <div class="text-container">
        <div class="header">
            <h3>BARCELONA, SPAIN</h3>
            <h4>(20% off!)</h4>
        </div>

        <hr>

        <div class="text-content">
            <p>
                Sed ut perspiciatis unde omnis 
                iste natus error sit voluptatem 
                accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae 
                ab illo inventore veritatis et quasi 
                architecto beatae vitae dicta sunt 
                explicabo. 
            </p>

            <button>LEARN MORE</button>
        </div>
    </div>
</div>
<div class="offer-container">
    <div class="img-container bangkok"></div>
    <div class="text-container">
        <div class="header">
            <h3>BANGKOK, THAILAND</h3>
            <h4>(10% off!)</h4>
        </div>

        <hr>

        <div class="text-content">
            <p>
                Sed ut perspiciatis unde omnis 
                iste natus error sit voluptatem 
                accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae 
                ab illo inventore veritatis et quasi 
                architecto beatae vitae dicta sunt 
                explicabo. 
            </p>

            <button>LEARN MORE</button>
        </div>
    </div>
</div>
</div>`;
var blogContent = `<div class="blog">
<div class="title">
    <h3>BLOG:</h3>
    <hr>
</div>
<div class="blog-entry">
    <div class="date-icon"><h4>06</h4> <p>JUN</p></div>
    <div class="blog-content">
        <div class="img-container"></div>
        <div class="text-container">
            <h3>Sed et persipiatis unde omnis iste natus</h3>
            <p>
                Sed ut perspiciatis unde omnis iste natus 
                error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae 
                ab illo inventore veritatis et quasi architecto 
                beatae vitae dicta sunt explicabo. 
            </p>
        </div>
    </div>
</div>
<div class="blog-entry">
    <div class="date-icon"><h4>23</h4> <p>JUL</p></div>
    <div class="blog-content">
        <div class="img-container"></div>
        <div class="text-container">
            <h3>Sed et persipiatis unde omnis iste natus</h3>
            <p>
                Sed ut perspiciatis unde omnis iste natus 
                error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae 
                ab illo inventore veritatis et quasi architecto 
                beatae vitae dicta sunt explicabo. 
            </p>
        </div>
    </div>
</div>
</div>`;
var contactContent = `<div class="contact">
<div class="title">
    <h3>CONTACT US:</h3>
    <hr>
</div>

<div class="content">
    <div class="address-container">
        <div class="map">
            <img src="../images/map.svg" alt="map of location">
        </div>
        <div class="address">
            <p>
                travel-fly Inc. <br>
                8901 Marmora Road, <br>
                Glasgow, D04 89GR. <br>
                Freephone:+1 800 559 6580 <br>
                Telephone:+1 800 603 6035 <br>
                FAX:+1 800 889 9898 <br>
                E-mail: mail@travelfly.org
            </p>
        </div>
    </div>
    <div class="contact-form">
        <div class="row flexible">
            <input class="item longer" type="text" placeholder="Your name...">
        </div>
        <div class="row flexible">
            <input class="item longer" type="email" placeholder="Email address...">
        </div>
        <div class="row flexible">
            <input class="item longer" type="email" placeholder="Company...">
        </div>
        <div class="row">
            <textarea name="" id="" cols="30" rows="10" placeholder="Message..."></textarea>
        </div>
        <div class="row">
            <button>SEND MESSAGE</button>
        </div>
    </div>
</div>
</div>`;

var toursContent = `<div class="tour">
   <header>
       <span>tours:</span>
   </header>

   <div class="tours">
       <div class="tourPromo israel">
            <h1>Israel</h1>
            <h3>from $1000</h3>
            <button id="israel">LEARN MORE</button>
       </div>
       <div class="tourPromo us">
            <h1>U.S.A</h1>
            <h3>from $1500</h3>
            <button id="usa">LEARN MORE</button>
       </div>
       <div class="tourPromo aust">
            <h1>Australia</h1>
            <h3>from $1800</h3>
            <button id="australia">LEARN MORE</button>
       </div>

       <div class="tourPromo zealand">
            <h1>New Zealand</h1>
            <h3>from $1800</h3>
            <button  id="zealand">LEARN MORE</button>
       </div>
       <div class="tourPromo france">
            <h1>France</h1>
            <h3>from $2500</h3>
            <button id="france">LEARN MORE</button>
       </div>
       <div class="tourPromo egypt">
            <h1>Egypt</h1>
            <h3>from $900</h3>
            <button id="egypt">LEARN MORE</button>
       </div>

       <div class="tourPromo japan">
            <h1>Japan</h1>
            <h3>from $1300</h3>
            <button id="japan">LEARN MORE</button>
       </div>
       <div class="tourPromo canada">
            <h1>Canada</h1>
            <h3>from $2000</h3>
            <button id="canada">LEARN MORE</button>
       </div>
       <div class="tourPromo uae">
            <h1>U.A.E</h1>
            <h3>from $3000</h3>
            <button id="uae">LEARN MORE</button>
       </div>

   </div>
</div>`;

// pages for the countries tours
var israelContent = `<div class="individual-tour">
<div class="header israel-hero">
    <div class="title"><p>Israel Tour Package:</p></div>
    <div class="pricing"><p>Starting from $1000 (prices may vary)</p></div>
</div>
<div class="promo-images">
    <div class="promo-img israel-1"></div>
    <div class="promo-img israel-2"></div>
    <div class="promo-img israel-3"></div>
</div>
<div class="text-container">
    <div class="day">
        <h3>Day 1:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 2:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 3:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="button-container">
    <button>BOOK NOW</button>
</div>
</div>`;
var usaContent = `<div class="individual-tour">
<div class="header usa-hero">
    <div class="title"><p>U.S.A Tour Package:</p></div>
    <div class="pricing"><p>Starting from $1500 (prices may vary)</p></div>
</div>
<div class="promo-images">
    <div class="promo-img usa-1"></div>
    <div class="promo-img usa-2"></div>
    <div class="promo-img usa-3"></div>
</div>
<div class="text-container">
    <div class="day">
        <h3>Day 1:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 2:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 3:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="button-container">
    <button>BOOK NOW</button>
</div>
</div>`;
var australiaContent = `<div class="individual-tour">
<div class="header australia-hero">
    <div class="title"><p>Australia Tour Package:</p></div>
    <div class="pricing"><p>Starting from $1800 (prices may vary)</p></div>
</div>
<div class="promo-images">
    <div class="promo-img australia-1"></div>
    <div class="promo-img australia-2"></div>
    <div class="promo-img australia-3"></div>
</div>
<div class="text-container">
    <div class="day">
        <h3>Day 1:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 2:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 3:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="button-container">
    <button>BOOK NOW</button>
</div>
</div>`;

var zealandContent = `<div class="individual-tour">
<div class="header zealand-hero">
    <div class="title"><p>New Zealand Tour Package:</p></div>
    <div class="pricing"><p>Starting from $1200 (prices may vary)</p></div>
</div>
<div class="promo-images">
    <div class="promo-img zealand-1"></div>
    <div class="promo-img zealand-2"></div>
    <div class="promo-img zealand-3"></div>
</div>
<div class="text-container">
    <div class="day">
        <h3>Day 1:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 2:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 3:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="button-container">
    <button>BOOK NOW</button>
</div>
</div>`;
var franceContent = ` <div class="individual-tour">
<div class="header france-hero">
    <div class="title"><p>France Tour Package:</p></div>
    <div class="pricing"><p>Starting from $2500 (prices may vary)</p></div>
</div>
<div class="promo-images">
    <div class="promo-img france-1"></div>
    <div class="promo-img france-2"></div>
    <div class="promo-img france-3"></div>
</div>
<div class="text-container">
    <div class="day">
        <h3>Day 1:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 2:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 3:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="button-container">
    <button>BOOK NOW</button>
</div>
</div>`;
var egyptContent = `<div class="individual-tour">
<div class="header egypt-hero">
    <div class="title"><p>Egypt Tour Package:</p></div>
    <div class="pricing"><p>Starting from $900 (prices may vary)</p></div>
</div>
<div class="promo-images">
    <div class="promo-img egypt-1"></div>
    <div class="promo-img egypt-2"></div>
    <div class="promo-img egypt-3"></div>
</div>
<div class="text-container">
    <div class="day">
        <h3>Day 1:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 2:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 3:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="button-container">
    <button>BOOK NOW</button>
</div>
</div>`;

var japanContent = `<div class="individual-tour">
<div class="header japan-hero">
    <div class="title"><p>Japan Tour Package:</p></div>
    <div class="pricing"><p>Starting from $2000 (prices may vary)</p></div>
</div>
<div class="promo-images">
    <div class="promo-img japan-1"></div>
    <div class="promo-img japan-2"></div>
    <div class="promo-img japan-3"></div>
</div>
<div class="text-container">
    <div class="day">
        <h3>Day 1:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 2:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 3:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="button-container">
    <button>BOOK NOW</button>
</div>
</div>`;
var canadaContent = `<div class="individual-tour">
<div class="header canada-hero">
    <div class="title"><p>Canada Tour Package:</p></div>
    <div class="pricing"><p>Starting from $2000 (prices may vary)</p></div>
</div>
<div class="promo-images">
    <div class="promo-img canada-1"></div>
    <div class="promo-img canada-2"></div>
    <div class="promo-img canada-3"></div>
</div>
<div class="text-container">
    <div class="day">
        <h3>Day 1:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 2:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 3:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="button-container">
    <button>BOOK NOW</button>
</div>
</div>`;
var uaeContent = `<div class="individual-tour">
<div class="header uae-hero">
    <div class="title"><p>U.A.E Tour Package:</p></div>
    <div class="pricing"><p>Starting from $3000 (prices may vary)</p></div>
</div>
<div class="promo-images">
    <div class="promo-img uae-1"></div>
    <div class="promo-img uae-2"></div>
    <div class="promo-img uae-3"></div>
</div>
<div class="text-container">
    <div class="day">
        <h3>Day 1:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 2:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
    <div class="day">
        <h3>Day 3:</h3>
        <hr>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam a
            liquam quaerat voluptatem. 
        </p>
    </div>
</div>
<div class="button-container">
    <button>BOOK NOW</button>
</div>
</div>
`;

export function getPageContent(pageID) {
    $("#app").html(eval(pageID));

    if(pageID == "toursContent"){
        $("button").click(function(e){
            let btnID = this.id;
            let tourID = btnID + "Content";
            console.log(btnID);
            $("#app").html(eval(tourID));
        })
    }
}