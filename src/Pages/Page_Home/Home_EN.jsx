function Homepage({ setPage }) {
    return(
        <div>
            <header class="masthead">
                <div class="container h-100">
                    <div class="row h-100 align-items-center justify-content-center text-center">
                        <div class="col-lg-10 align-self-center">
                            <h1 class="text-uppercase text-white font-weight-bold">Career Simulator for CPE&ISNE</h1>
                        </div>
                        <div class="col-lg-8 align-self-baseline">
                            <p class="text-white font-weight-light mb-5">Start the test to predict your future career</p>
                            <a class="btn btn-primary btn-xl js-scroll-trigger" onClick={() => {setPage(1)}}>Let's take the test</a>
                        </div>
                    </div>
                </div>
            </header>
            <section class="page-section bg-primary" id="about">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0">More informations about <br/> Myers-Briggs Type Indicator</h2>
                        <hr class="divider my-4" />
                        <br/>
                        <a class="btn btn-light btn-xl js-scroll-trigger" href="https://www.16personalities.com/personality-types">Click!</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homepage;