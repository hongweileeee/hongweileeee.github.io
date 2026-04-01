export default function Skills() {
  const categories = [
    {
      title: "Data Analysis & Languages",
      skills: ["SQL (PostgreSQL, MySQL)", "Python (Pandas, NumPy)", "R"]
    },
    {
      title: "Cloud & Data Platforms",
      skills: ["Google Cloud Platform (BigQuery, Cloud Run)", "Docker"]
    },
    {
      title: "BI & Visualisation",
      skills: ["Looker Studio", "Power BI", "Tableau", "Streamlit"]
    },
    {
      title: "CRM & Marketing Platforms",
      skills: ["Adobe Campaign V8", "SAP Hybris"]
    },
    {
      title: "Other Tools",
      skills: ["Git", "Jira / Confluence", "Excel/VBA"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-zinc-900/30 border-y border-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-16 flex items-center justify-end">
          <span className="block h-px w-32 md:w-96 bg-zinc-800 mr-6"></span>
          <span className="text-sm font-mono text-zinc-500 mr-4">03.</span> Core Competencies
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-medium text-zinc-200 border-b border-zinc-800 pb-2">
                {category.title}
              </h3>
              <ul className="grid grid-cols-2 gap-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-sm text-zinc-400 group">
                    <span className="text-zinc-600 mr-2 group-hover:text-zinc-100 transition-colors">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
