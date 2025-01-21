
const faqs_list = [{
  question: " How to activate eSIM on iPhone?",
  answer: "Activating eSIM on your iPhone is easy. First, ensure you have an eSIM card or QR code from your carrier. Then, go to Settings > Cellular > Add Cellular Plan. Follow the steps and use the QR code or enter the details provided by your carrier. Your eSIM will be activated."
}]



export default function Faqs() {
  return (
    <section>
      <div className="container py-4 my-4">
        <h2 className="text-center">No Childish FAQs Here! Phonico is Sensible</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              {faqs_list.map((faq,index) => {
                return (
                  <div key={index} className="accordion-item border-0 my-4">
                    <h3 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed rounded py-4 pink-bg" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                       {faq.question}
                      </button>
                    </h3>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <p>
                        {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
              
            </div>
          </div>
          <div className="col-md-6">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}