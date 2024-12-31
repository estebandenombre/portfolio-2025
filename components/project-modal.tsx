import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

interface ProjectModalProps {
    isOpen: boolean
    onClose: () => void
    projectName: string
    projectUrl: string
}

export function ProjectModal({ isOpen, onClose, projectName, projectUrl }: ProjectModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle>{projectName}</DialogTitle>
                    <DialogDescription>
                        Click the button below to view the project.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center mt-4">
                    <Button asChild>
                        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

