import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Shahabas K M — Data Scientist with expertise in machine learning, statistical modeling, and GenAI/RAG pipelines.",
};

const skillCategories = [
  {
    title: "Machine Learning & MLOps",
    skills: ["XGBoost", "Scikit-learn", "TensorFlow", "PyTorch", "Model Deployment", "A/B Testing"],
  },
  {
    title: "Statistical Modeling",
    skills: [
      "Mixed-Effects (MixedLM)",
      "Regression Analysis",
      "Survival Analysis",
      "Causal Inference",
      "Bayesian Methods",
    ],
  },
  {
    title: "Generative AI & LLMs",
    skills: [
      "RAG Pipelines",
      "LangChain",
      "LlamaIndex",
      "ChromaDB",
      "Prompt Engineering",
      "Fine-tuning",
    ],
  },
  {
    title: "Data Engineering & Tools",
    skills: [
      "Python",
      "R",
      "SQL",
      "Git",
      "Docker",
      "AWS",
      "REST APIs",
    ],
  },
  {
    title: "Clinical & Domain Standards",
    skills: [
      "CDISC SDTM",
      "CDISC ADaM",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Data Visualization",
    skills: [
      "ggplot2",
      "Matplotlib",
      "Seaborn",
      "Tableau",
      "Power BI",
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <AnimatedSection>
        <SectionHeading
          title="About Me"
          subtitle="A brief look at who I am and what I work with."
        />
      </AnimatedSection>

      {/* Bio */}
      <AnimatedSection delay={0.1}>
        <div className="glass rounded-2xl p-8 mb-16">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m a <span className="text-foreground font-medium">Results-driven Data Scientist</span> with 2+ years of experience delivering production-grade machine learning, statistical modeling, and generative AI solutions in clinical and environmental health domains.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            My track record includes building hybrid ML pipelines, LLM-powered RAG systems with semantic retrieval, and scalable data workflows. I am adept at model development, feature engineering, MLOps integration, and communicating complex findings to technical and non-technical stakeholders to drive measurable impact.
          </p>
        </div>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection delay={0.2}>
        <h3 className="text-xl font-semibold mb-8 text-center">
          Core <span className="text-gradient">Competencies</span>
        </h3>
      </AnimatedSection>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category, i) => (
          <AnimatedSection key={category.title} delay={0.2 + i * 0.1}>
            <div className="glass rounded-2xl p-6 h-full">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
