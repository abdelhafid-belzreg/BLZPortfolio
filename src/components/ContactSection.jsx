import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaTelegramPlane, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const formRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		emailjs
			.sendForm(
				"service_pkvs9vn", // Outlook Service ID
				"template_3uwvf92", // EmailJS Template ID
				formRef.current,
				"P_io0ari62bxHKwJI" // Your EmailJS Public Key
			)
			.then(
				() => {
					toast({
						title: "Message sent!",
						description:
							"Thank you for your message. I'll get back to you soon.",
					});
					formRef.current.reset();
					setIsSubmitting(false);
				},
				(error) => {
					console.error(error);
					toast({
						title: "Error",
						description: "Something went wrong. Please try again.",
						variant: "destructive",
					});
					setIsSubmitting(false);
				}
			);
	};

	return (
		<section id="contact" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Get In <span className="text-primary">Touch</span>
				</h2>
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Have a project in mind or interested in collaborating? I’m always open
					to discussing new opportunities.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Contact Info */}
					<div className="space-y-8">
						<h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Mail className="h-6 w-6 text-primary" />
								</div>
								<div>
									<p className="font-medium">Email</p>
									<a
										href="mailto:abdelhafidbelzreg@gmail.com"
										className="text-muted-foreground hover:text-primary transition-colors">
										abdelhafidbelzreg@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Phone className="h-6 w-6 text-primary" />
								</div>
								<div>
									<p className="font-medium">Phone</p>
									<a
										href="tel:+212767864261"
										className="text-muted-foreground hover:text-primary transition-colors">
										+212 7 67 86 42 61
									</a>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<MapPin className="h-6 w-6 text-primary" />
								</div>
								<div>
									<p className="font-medium">Location</p>
									<span className="text-muted-foreground">
										Salé, Rabat-Salé-Kénitra, Maroc
									</span>
								</div>
							</div>
						</div>

						<div className="pt-8">
							<h4 className="font-medium mb-4">Connect With Me</h4>
							<div className="flex space-x-4 justify-center">
								<a target="_blank" href="https://wa.me/212767864261">
									<FaWhatsapp />
								</a>
								<a target="_blank" href="https://t.me/belzre">
									<FaTelegramPlane />
								</a>
								<a
									target="_blank"
									href="https://www.linkedin.com/in/abdelhafid-belzreg-444799327">
									<FaLinkedinIn />
								</a>
								<a target="_blank" href="https://x.com/ABelzreg75932">
									<FaXTwitter />
								</a>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-card p-8 rounded-lg shadow-xs">
						<h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
						<form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="user_name"
									placeholder="Abdelhafid..."
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2">
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="user_email"
									placeholder="abdelhafid@gmail.com"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2">
									Your Message
								</label>
								<textarea
									id="message"
									name="message"
									placeholder="Hi, I'd like to talk about..."
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className={cn(
									"cosmic-button w-full flex items-center justify-center gap-2"
								)}>
								{isSubmitting ? "Sending..." : "Send Message"}
								<Send size={16} />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
