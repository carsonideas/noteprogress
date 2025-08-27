import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative mt-16 sm:mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Loved by educators</h2>
        <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">Real results from real teams.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <figure className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 p-5">
            <div className="flex items-center gap-2 text-amber-500">
              <span aria-hidden="true">★★★★★</span>
              <span className="sr-only">5 out of 5 stars</span>
            </div>
            <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              "Assesium cut our grading time in half without sacrificing fairness. The audit tools are outstanding."
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-white/10"></span>
              <div>
                <p className="text-sm font-medium">Dr. Priya Mehta</p>
                <p className="text-xs text-zinc-500">Dept. Chair, Life Sciences</p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 p-5">
            <div className="flex items-center gap-2 text-amber-500">
              <span aria-hidden="true">★★★★★</span>
              <span className="sr-only">5 out of 5 stars</span>
            </div>
            <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              "The AI suggestions feel collaborative. I stay in control, but it removes repetitive work."
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-white/10"></span>
              <div>
                <p className="text-sm font-medium">Samir Patel</p>
                <p className="text-xs text-zinc-500">Senior Lecturer, Humanities</p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 p-5">
            <div className="flex items-center gap-2 text-amber-500">
              <span aria-hidden="true">★★★★★</span>
              <span className="sr-only">5 out of 5 stars</span>
            </div>
            <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              "Integration with Canvas was painless. The transparency helps with student appeals."
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-white/10"></span>
              <div>
                <p className="text-sm font-medium">Prof. Alison Grant</p>
                <p className="text-xs text-zinc-500">Program Director, Business</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

