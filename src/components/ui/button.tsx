import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-luxury text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-luxury",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-elegant hover:shadow-luxury",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Moroccan Luxury variants
        "moroccan-primary": "bg-secondary text-secondary-foreground font-playfair font-medium tracking-luxury shadow-luxury hover:shadow-premium hover:-translate-y-0.5 transition-smooth",
        "moroccan-outline": "border-2 border-secondary bg-transparent text-secondary font-playfair font-medium tracking-luxury hover:bg-secondary hover:text-secondary-foreground transition-smooth",
        "moroccan-ghost": "text-secondary font-playfair font-medium tracking-luxury hover:bg-secondary/10 hand-drawn-underline transition-smooth",
        "emerald": "bg-accent text-accent-foreground font-playfair font-medium tracking-luxury hover:bg-accent/90 shadow-luxury transition-smooth",
        "minimal": "bg-transparent text-foreground border border-border hover:border-secondary hover:text-secondary transition-smooth font-inter",
        "luxury-minimal": "bg-background text-foreground hover:bg-muted border-0 font-inter font-medium tracking-wide-luxury transition-smooth"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
        "icon-sm": "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
