import { useState } from "react";
import { Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { EMAIL, LINKEDIN, PHONE } from "@/data/content";
import { Reveal, SectionHeader, TiltCard } from "./fx";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

// EmailJS public identifiers (client-side by design)
const SERVICE_ID = "service_twtuhws";
const TEMPLATE_ID = "template_j84c4jy";
const PUBLIC_KEY = "8jMjDhOZnSL7p-56t";

const inputCls = "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-white/[0.07] focus:ring-4 focus:ring-primary/10";

export const ContactSection = () => {
  const { t } = useLanguage();
  const c = t.contact;
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
    <section id="contact" className="section-padding relative">
      <div className="container-narrow mx-auto">
        <SectionHeader eyebrow={c.title} title={c.subtitle} />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="mb-6 text-lg text-muted-foreground">{c.description}</p>
            <div className="space-y-3">
              {info.map(({ icon: Icon, label, value, href }) => {
                const body = (
                  <TiltCard className="flex items-center gap-4 p-4" max={5}>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary"><Icon className="h-5 w-5" /></span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                      <p className="truncate text-sm font-medium">{value}</p>
                    </div>
                  </TiltCard>
                );
                return href ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">{body}</a> : <div key={label}>{body}</div>;
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltCard className="p-7 md:p-9" max={3}>
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block"><span className="mb-2 block text-xs text-muted-foreground">{c.form.name}</span><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={c.form.namePlaceholder} maxLength={100} /></label>
                  <label className="block"><span className="mb-2 block text-xs text-muted-foreground">{c.form.email}</span><input type="email" className={inputCls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={c.form.emailPlaceholder} maxLength={255} /></label>
                </div>
                <label className="block"><span className="mb-2 block text-xs text-muted-foreground">{c.form.message}</span><textarea rows={6} className={`${inputCls} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={c.form.messagePlaceholder} maxLength={1000} /></label>
                <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
                  {loading ? <><Loader2 className="h-4 w-4 animate-spin" />{c.form.sending}</> : <><Send className="h-4 w-4" />{c.form.send}</>}
                </button>
              </form>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
