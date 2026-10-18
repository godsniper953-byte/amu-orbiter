import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, CircleAlert, LoaderCircle, Send } from "lucide-react";
import { siteContent } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

type SubmissionState = { type: "idle" | "success" | "error"; message: string };

export default function JoinUs() {
  const [submission, setSubmission] = useState<SubmissionState>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    if (data.get("website")) {
      setSubmission({ type: "error", message: "This form could not be submitted. Please leave the optional field blank." });
      return;
    }
    if (!siteContent.applicationEndpoint) {
      setSubmission({ type: "error", message: "Applications are not connected yet. Your details have not been sent or saved. Please check back soon." });
      return;
    }

    setIsSubmitting(true);
    setSubmission({ type: "idle", message: "" });
    try {
      const payload = Object.fromEntries(data.entries());
      delete payload.website;
      const response = await fetch(siteContent.applicationEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Application service returned ${response.status}`);
      setSubmission({ type: "success", message: "Your application has been received. Thank you for reaching out." });
      form.reset();
    } catch {
      setSubmission({ type: "error", message: "We couldn’t send your application just now. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section join-section" id="join" aria-labelledby="join-title">
      <div className="container">
        <div className="join-banner">
          <div className="join-banner-art" aria-hidden="true"><span /><span /><span /></div>
          <div className="join-banner-copy">
            <span className="eyebrow"><span className="eyebrow-mark">✳</span> THERE'S A PLACE FOR YOU HERE</span>
            <h2 id="join-title">Your next chapter<br /><span>starts here.</span></h2>
            <p>Have an idea, a creative skill, or the willingness to learn? Find your place in the orbit.</p>
            <a className="button button-primary" href="#application-form">Join the Orbit <ArrowUpRight size={16} /></a>
          </div>
          <div className="join-banner-caption">BRING YOUR CURIOSITY<br />WE’LL FIND THE REST</div>
        </div>

        <div className="application-layout" id="application-form">
          <div className="application-intro">
            <SectionHeading
              titleId="application-title"
              eyebrow="A few things about you"
              title="Let’s get to know you."
              description="Tell us a little about what interests you. Every field marked * is required."
            />
            <div className={`connection-status${siteContent.applicationEndpoint ? " connected" : ""}`} role="status">
              <span className="connection-indicator" />
              <div><strong>{siteContent.applicationEndpoint ? "Application service configured" : "Form not connected"}</strong><p>{siteContent.applicationEndpoint ? "Your application will be sent securely to the configured endpoint." : "This form is a preview. Submissions are not sent or saved until a service is configured."}</p></div>
            </div>
          </div>

          <form className="application-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label className="form-field"><span>Full name <b>*</b></span><input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Your name" /></label>
              <label className="form-field"><span>University email <b>*</b></span><input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@university.edu" /></label>
            </div>
            <div className="form-row">
              <label className="form-field"><span>Department & year <b>*</b></span><input name="departmentYear" required maxLength={120} placeholder="e.g. Department, 2nd year" /></label>
              <label className="form-field"><span>Area of interest <b>*</b></span>
                <select name="interest" required defaultValue="">
                  <option value="" disabled>Select a domain</option>
                  <option>Media & Content</option><option>Graphic Design</option><option>Public Relations</option>
                  <option>Video & Motion</option><option>Technology & AI</option><option>Events & Coordination</option><option>More than one</option>
                </select>
              </label>
            </div>
            <label className="form-field"><span>Skills <span className="field-optional">(if any)</span></span><input name="skills" maxLength={300} placeholder="Writing, design, video editing…" /></label>
            <label className="form-field"><span>Why would you like to join Orbiter? <b>*</b></span><textarea name="motivation" required minLength={10} maxLength={1200} rows={4} placeholder="Tell us what you're curious about…" /></label>
            <label className="form-field"><span>Portfolio or social profile <span className="field-optional">(optional)</span></span><input name="portfolio" type="url" maxLength={500} placeholder="https://" /></label>
            <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
            <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? <><LoaderCircle size={16} className="spin-icon" /> Sending…</> : <>Submit application <Send size={15} /></>}
            </button>
            {submission.message && (
              <p className={`form-message ${submission.type}`} role="status" aria-live="polite">
                {submission.type === "success" ? <CheckCircle2 size={17} /> : <CircleAlert size={17} />} {submission.message}
              </p>
            )}
          </form>
        </div>
        <div className="application-config-note"><span>SETUP NOTE</span> Connect a form service with <code>VITE_APPLICATION_ENDPOINT</code> to accept applications. Until then, this form never stores or transmits personal data.</div>
      </div>
    </section>
  );
}
