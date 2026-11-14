import { useState } from "react";
import { Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { EMAIL, LINKEDIN, PHONE, ui } from "@/data/content";
import { Reveal } from "./fx";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

// EmailJS public identifiers (client-side by design)
const SERVICE_ID = "service_twtuhws";
const TEMPLATE_ID = "template_j84c4jy";
const PUBLIC_KEY = "8jMjDhOZnSL7p-56t";

const field = "w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-white/60";

export const ContactSection = () => {
  const { t, language } = useLanguage();
  const c = t.contact;
  const u = ui[language];
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!schema.safeParse(form).success) { toast.error(c.toast.errorTitle, { description: c.toast.errorValidation }); return; }
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { from_name: form.name, from_email: form.email, message: form.message, to_name: "Rishabh" }, PUBLIC_KEY);
      toast.success(c.toast.title, { description: c.toast.description });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error(c.toast.errorTitle, { description: c.toast.errorDescription });
    } finally { setLoading(false); }
  };

  const info = [
    { icon: Mail, label: c.info.email, value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, label: c.info.phone, value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
    { icon: Linkedin, label: c.info.linkedin, value: "Rishabh Raj Pandey", href: LINKEDIN },
    { icon: MapPin, label: c.info.location, value: c.info.locationValue },
  ];

  return (
    <section id="contact" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{u.contactEyebrow}</p>
          <h2 className="mt-3 font-display text-5xl leading-[1.05] md:text-6xl">{u.contactTitle}</h2>
          <p className="mt-5 max-w-md text-white/75">{c.description}</p>
          <ul className="mt-10 space-y-5">
            {info.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-white/60" />
                  <span><span className="block text-xs uppercase tracking-wider text-white/50">{label}</span><span className="text-sm">{value}</span></span>
                </>
              );
              return (
                <li key={label}>
                  {href
                    ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex gap-4 hover:underline">{inner}</a>
                    : <div className="flex gap-4">{inner}</div>}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.05}>
          <form onSubmit={submit} className="space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block"><span className="mb-2 block text-xs text-white/70">{c.form.name}</span><input className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={c.form.namePlaceholder} maxLength={100} autoComplete="name" /></label>
              <label className="block"><span className="mb-2 block text-xs text-white/70">{c.form.email}</span><input type="email" className={field} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={c.form.emailPlaceholder} maxLength={255} autoComplete="email" /></label>
            </div>
            <label className="block"><span className="mb-2 block text-xs text-white/70">{c.form.message}</span><textarea rows={6} className={`${field} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={c.form.messagePlaceholder} maxLength={1000} /></label>
            <button type="submit" disabled={loading} className="btn w-full bg-white text-primary hover:bg-white/90 disabled:opacity-60">
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" />{c.form.sending}</> : <><Send className="h-4 w-4" />{c.form.send}</>}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
