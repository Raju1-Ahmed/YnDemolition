import React from "react";
import { Link } from "react-router-dom";

function LegalPageLayout({ eyebrow, title, intro, effectiveDate, lastUpdated, sections, activePage }) {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);

    if (!target) return;

    const offset = 96;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    window.history.replaceState(null, "", `#${sectionId}`);
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-[#0d1418] px-6 py-20 text-white md:py-28">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <Link to="/" className="text-sm font-bold text-amber-300 transition hover:text-amber-200">← Back to YN Demolition</Link>
          <p className="mt-12 text-xs font-black uppercase tracking-[0.3em] text-amber-300">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200">Effective date: <span className="ml-1 font-bold text-white">{effectiveDate}</span></p>
            {lastUpdated ? <p className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-100">Last updated: <span className="ml-1 font-bold text-white">{lastUpdated}</span></p> : null}
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[220px_1fr] lg:py-16">
        <aside className="self-start lg:sticky lg:top-24">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">On this page</p>
          <nav className="mt-4 space-y-2">{sections.map((section) => <div key={section.id}><a href={`#${section.id}`} onClick={(event) => scrollToSection(event, section.id)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-amber-100 hover:text-slate-900">{section.number}. {section.title}</a>{section.subsections ? <div className="ml-4 space-y-1 border-l border-slate-200 pl-2">{section.subsections.map((subsection) => <a key={subsection.id} href={`#${subsection.id}`} onClick={(event) => scrollToSection(event, subsection.id)} className="block rounded px-2 py-1 text-xs text-slate-500 transition hover:bg-amber-50 hover:text-slate-900">{subsection.title}</a>)}</div> : null}</div>)}</nav>
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-slate-700">Need help? <Link to="/contact" className="font-bold text-amber-700 underline">Contact our team</Link>.</div>
        </aside>
        <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 md:p-10">
          {sections.map((section) => <section key={section.id} id={section.id} className="scroll-mt-24 border-b border-slate-200 py-8 first:pt-0 last:border-b-0 last:pb-0"><p className="text-xs font-black uppercase tracking-[0.22em] text-amber-600">Section {section.number}</p><h2 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">{section.title}</h2><div className="mt-5 space-y-4 leading-8 text-slate-600">{section.body}</div>{section.subsections ? <div className="mt-8 space-y-6 border-l-2 border-amber-200 pl-5">{section.subsections.map((subsection) => <div key={subsection.id} id={subsection.id} className="scroll-mt-24"><h3 className="text-lg font-black text-slate-900">{subsection.title}</h3><div className="mt-2 space-y-3 leading-7 text-slate-600">{subsection.body}</div></div>)}</div> : null}</section>)}
        </article>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-6 pb-16"><Link to="/privacy" className={`rounded-full px-5 py-2 text-sm font-bold transition ${activePage === "privacy" ? "bg-[#0d1418] text-white" : "bg-white text-slate-600 shadow-sm hover:bg-slate-200"}`}>Privacy Policy</Link><Link to="/terms" className={`rounded-full px-5 py-2 text-sm font-bold transition ${activePage === "terms" ? "bg-[#0d1418] text-white" : "bg-white text-slate-600 shadow-sm hover:bg-slate-200"}`}>Terms & Conditions</Link></div>
    </main>
  );
}

export default LegalPageLayout;
