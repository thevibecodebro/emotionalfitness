
/**
 * Re-export toast functionality from hooks directory
 * 
 * This file maintains backwards compatibility with shadcn/ui structure
 * while the actual implementation is in the hooks directory.
 */
import { useToast, toast, clearAllToasts } from "@/hooks/use-toast";

export { useToast, toast, clearAllToasts };

