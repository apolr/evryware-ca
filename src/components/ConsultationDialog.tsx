
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface ConsultationDialogProps {
  triggerText: string;
  className?: string;
}

const ConsultationDialog = ({ triggerText, className }: ConsultationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`${className} bg-[#008000] hover:bg-[#006600] text-white`}>
          {triggerText}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule Your Free Consultation</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <p className="text-sm text-gray-600">
            Ready to discuss your project? Book a 30-minute consultation with our team.
          </p>
          <iframe src="https://calendly.com/hello-evryware/30min" width="100%" height="600" frameBorder="0" title="Schedule Consultation"></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
