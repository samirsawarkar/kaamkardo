import SubdomainHero from "@/components/subdomain/hero";
import SubdomainBeforeAfter from "@/components/subdomain/before-after";
import SubdomainWhatYouGet from "@/components/subdomain/what-you-get";
import SubdomainProof from "@/components/subdomain/proof";
import SubdomainPricing from "@/components/subdomain/pricing";
import SubdomainHowItWorks from "@/components/subdomain/how-it-works";

export default function ResumeLandingPage() {
  return (
    <>
      <SubdomainHero 
        headline="Get more interview calls in 7 days."
        subheadline="We rewrite your resume to pass ATS and get recruiter attention immediately."
        ctaText="Fix My Resume Now"
      />

      <SubdomainBeforeAfter 
        beforeTitle="Old Resume"
        beforeItems={[
          "Blocked by ATS algorithms",
          "Boring list of duties and responsibilities",
          "Lost in the pile of 500+ applicants"
        ]}
        afterTitle="KaamKarDo Resume"
        afterItems={[
          "Passes all modern ATS screeners",
          "Focuses on achievements and outcomes",
          "Commands immediate recruiter respect"
        ]}
      />

      <SubdomainWhatYouGet 
        items={[
          "Full ATS Optimization",
          "Recruiter-focused bullet points",
          "Role-specific customization",
          "Professional formatting",
          "Delivery in under 24 hours",
          "1 Free Revision"
        ]}
      />

      <SubdomainProof 
        quote="I was getting zero replies for months. After they rewrote my resume, I got 3 interviews in 5 days."
        name="Rahul S."
        role="Software Engineer"
        result="3 Interviews in 5 Days"
      />

      <SubdomainPricing 
        tiers={[
          {
            name: "Basic Rewrite",
            price: "₹999",
            features: ["Full Text Rewrite", "ATS Formatting", "24hr Delivery"]
          },
          {
            name: "Pro Rewrite",
            price: "₹1,499",
            features: ["Full Text Rewrite", "ATS Formatting", "LinkedIn Optimization", "24hr Delivery"],
            recommended: true
          },
          {
            name: "Executive",
            price: "₹2,499",
            features: ["Everything in Pro", "Custom Cover Letter", "Priority 12hr Delivery"]
          }
        ]}
      />

      <SubdomainHowItWorks />
    </>
  );
}
