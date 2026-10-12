import { useState } from "react";
import {
  Plus, ArrowRight, Trash2, MoreHorizontal, Search, Bookmark, Settings, Loader2, Info,
  CheckCircle2, AlertTriangle, XCircle, Inbox, SlidersHorizontal, X, LogOut, User, Bell,
} from "lucide-react";
import { Section, Group, Specimen } from "./section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";

export function ComponentsSection() {
  const [filters, setFilters] = useState(["Design", "Remote"]);
  return (
    <Section id="components" index="02 — Components" title="Core components" intro="Reusable building blocks with their key states. One shape language, one focus treatment (cyan ring), one height scale.">
      <Group title="Buttons" note="Primary for the main action per view. Cyan accent used sparingly.">
        <div className="space-y-3">
          <Specimen label="Variants">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="outline">Secondary</Button>
              <Button variant="ghost">Tertiary</Button>
              <Button variant="link">Text link</Button>
              <Button variant="destructive"><Trash2 />Delete</Button>
            </div>
          </Specimen>
          <Specimen label="Sizes, icons & states">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button>Default <ArrowRight /></Button>
              <Button size="lg"><Plus />Large</Button>
              <Button disabled>Disabled</Button>
              <Button disabled><Loader2 className="animate-spin" />Saving</Button>
              <Button size="icon" variant="outline" aria-label="Bookmark"><Bookmark /></Button>
              <Button size="icon" variant="ghost" aria-label="Settings"><Settings /></Button>
              <Button size="icon-sm" variant="secondary" aria-label="More"><MoreHorizontal /></Button>
            </div>
          </Specimen>
        </div>
      </Group>

      <Group title="Form fields" note="Labels always visible. Helper text below, errors replace helper.">
        <div className="grid gap-3 md:grid-cols-2">
          <Specimen>
            <div className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="n">Full name</Label>
                <Input id="n" placeholder="Amina Bello" className="h-10" />
                <p className="type-small text-muted-foreground">As it appears on your documents.</p>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="s">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="s" placeholder="Search capabilities" className="h-10 pl-9" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="e">Email</Label>
                <Input id="e" defaultValue="amina@" aria-invalid className="h-10 border-destructive focus-visible:ring-destructive" />
                <p className="type-small flex items-center gap-1.5 text-destructive"><XCircle className="size-3.5" />Enter a valid email address.</p>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="d" className="text-muted-foreground">Disabled</Label>
                <Input id="d" disabled defaultValue="Locked value" className="h-10" />
              </div>
            </div>
          </Specimen>
          <Specimen>
            <div className="space-y-5">
              <div className="space-y-1.5">
                <Label>Commitment</Label>
                <Select defaultValue="part">
                  <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full-time</SelectItem>
                    <SelectItem value="part">Part-time</SelectItem>
                    <SelectItem value="project">Project-based</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="b">Short bio</Label>
                <Textarea id="b" rows={3} placeholder="What do you want to contribute to?" />
                <p className="type-small text-right text-muted-foreground">0 / 280</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Checkbox id="c1" defaultChecked />
                <Label htmlFor="c1" className="font-normal">Open to remote work</Label>
              </div>
              <RadioGroup defaultValue="a" className="gap-2.5">
                <div className="flex items-center gap-2.5"><RadioGroupItem value="a" id="r1" /><Label htmlFor="r1" className="font-normal">Paid</Label></div>
                <div className="flex items-center gap-2.5"><RadioGroupItem value="b" id="r2" /><Label htmlFor="r2" className="font-normal">Equity or exchange</Label></div>
              </RadioGroup>
              <div className="flex items-center justify-between">
                <Label htmlFor="sw" className="font-normal">Visible to organisations</Label>
                <Switch id="sw" defaultChecked />
              </div>
            </div>
          </Specimen>
        </div>
      </Group>

      <Group title="Identity & status" note="Avatars, badges and inline status.">
        <Specimen>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex -space-x-2">
              {["AB", "TK", "OM"].map((i) => (
                <Avatar key={i} className="border-2 border-card"><AvatarFallback className="bg-muted font-display text-xs font-semibold">{i}</AvatarFallback></Avatar>
              ))}
            </div>
            <div className="flex min-w-0 items-center gap-3">
              <Avatar className="size-11 shrink-0"><AvatarFallback className="bg-primary font-display font-semibold text-primary-foreground">AB</AvatarFallback></Avatar>
              <div className="min-w-0">
                <p className="truncate font-medium">Amina Bello</p>
                <p className="type-small truncate text-muted-foreground">Product designer · Lagos</p>
              </div>
            </div>
            <Separator orientation="vertical" className="hidden h-10 sm:block" />
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Neutral</Badge>
              <Badge variant="accent">Active</Badge>
              <Badge variant="success"><CheckCircle2 />Verified</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="destructive">Declined</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <span className="type-small inline-flex items-center gap-2"><span className="size-2 rounded-full bg-success" />Available now</span>
          </div>
        </Specimen>
      </Group>

      <Group title="Tabs & segmented" note="Tabs for views, segments for modes.">
        <div className="grid gap-3 md:grid-cols-2">
          <Specimen>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="evidence">Evidence</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="type-small pt-3 text-muted-foreground">Summary of identity and direction.</TabsContent>
              <TabsContent value="evidence" className="type-small pt-3 text-muted-foreground">Portfolio items and proof.</TabsContent>
              <TabsContent value="experience" className="type-small pt-3 text-muted-foreground">Roles and contributions.</TabsContent>
            </Tabs>
          </Specimen>
          <Specimen>
            <ToggleGroup type="single" defaultValue="list" variant="outline">
              <ToggleGroupItem value="list">List</ToggleGroupItem>
              <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
              <ToggleGroupItem value="map">Map</ToggleGroupItem>
            </ToggleGroup>
          </Specimen>
        </div>
      </Group>

      <Group title="Overlays" note="Menus, popovers, dialogs, drawers, tooltips.">
        <Specimen>
          <TooltipProvider delayDuration={150}>
            <div className="flex flex-wrap gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild><Button variant="outline">Menu <MoreHorizontal /></Button></DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuItem><User />Profile</DropdownMenuItem>
                  <DropdownMenuItem><Settings />Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive"><LogOut />Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Popover>
                <PopoverTrigger asChild><Button variant="outline">Popover</Button></PopoverTrigger>
                <PopoverContent className="w-64">
                  <p className="font-display font-semibold">Why this fit?</p>
                  <p className="type-small mt-1 text-muted-foreground">4 of 5 required capabilities have supporting evidence.</p>
                </PopoverContent>
              </Popover>
              <Dialog>
                <DialogTrigger asChild><Button>Open dialog</Button></DialogTrigger>
                <DialogContent className="rounded-xl">
                  <DialogHeader>
                    <DialogTitle className="font-display">Withdraw interest?</DialogTitle>
                    <DialogDescription>The organisation will be notified. You can express interest again later.</DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button variant="destructive">Withdraw</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Sheet>
                <SheetTrigger asChild><Button variant="outline">Mobile drawer</Button></SheetTrigger>
                <SheetContent side="bottom" className="rounded-t-xl">
                  <SheetHeader>
                    <SheetTitle className="font-display">Filters</SheetTitle>
                    <SheetDescription>Bottom sheets replace dialogs on phones.</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-wrap gap-2 p-4">
                    {["Remote", "Paid", "Part-time", "Design"].map((f) => <Badge key={f} variant="secondary">{f}</Badge>)}
                  </div>
                </SheetContent>
              </Sheet>
              <Tooltip>
                <TooltipTrigger asChild><Button size="icon" variant="ghost" aria-label="Info"><Info /></Button></TooltipTrigger>
                <TooltipContent>Tooltips explain, never contain actions</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </Specimen>
      </Group>

      <Group title="Loading" note="Skeletons mirror final layout.">
        <div className="grid gap-3 md:grid-cols-2">
          <Specimen>
            <div className="flex items-center gap-3">
              <Skeleton className="size-11 rounded-full" />
              <div className="flex-1 space-y-2"><Skeleton className="h-4 w-1/2" /><Skeleton className="h-3 w-1/3" /></div>
            </div>
            <Skeleton className="mt-4 h-16 w-full" />
          </Specimen>
          <Specimen>
            <div className="flex items-center gap-3 type-small"><Loader2 className="size-4 animate-spin" />Loading matches…</div>
            <div className="mt-5 space-y-1.5">
              <div className="type-small flex justify-between"><span>Profile completeness</span><span className="font-medium">68%</span></div>
              <Progress value={68} className="h-1.5" />
            </div>
          </Specimen>
        </div>
      </Group>

      <Group title="Feedback" note="Alerts are calm: soft fill, strong icon.">
        <div className="space-y-3">
          {[
            { v: "bg-accent-soft text-accent-ink", I: Info, t: "Your profile is visible to 12 organisations." },
            { v: "bg-success-soft text-success", I: CheckCircle2, t: "Connection request sent." },
            { v: "bg-warning-soft text-warning", I: AlertTriangle, t: "Add evidence to strengthen two capabilities." },
            { v: "bg-destructive-soft text-destructive", I: XCircle, t: "We couldn't save your changes. Try again." },
          ].map(({ v, I, t }) => (
            <div key={t} className={`flex items-start gap-3 rounded-lg p-4 ${v}`}>
              <I className="mt-0.5 size-4 shrink-0" />
              <p className="type-small font-medium text-foreground">{t}</p>
            </div>
          ))}
          <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-lg sm:max-w-sm">
            <Bell className="mt-0.5 size-4 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">New message from Kora Labs</p>
              <p className="type-small text-muted-foreground">"Would you be open to a short call?"</p>
            </div>
            <Button size="icon-sm" variant="ghost" aria-label="Dismiss"><X /></Button>
          </div>
        </div>
      </Group>

      <Group title="Empty, error, success" note="Short, specific, one action.">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { I: Inbox, t: "No connections yet", d: "When organisations respond, they'll appear here.", a: "Explore needs" },
            { I: XCircle, t: "Something went wrong", d: "We couldn't load this page.", a: "Try again" },
            { I: CheckCircle2, t: "Interest sent", d: "We'll let you know when Kora Labs replies.", a: "Back to needs" },
          ].map(({ I, t, d, a }) => (
            <Specimen key={t} className="text-center">
              <div className="mx-auto grid size-11 place-items-center rounded-full bg-muted"><I className="size-5" /></div>
              <p className="mt-4 font-display font-semibold">{t}</p>
              <p className="type-small mt-1 text-muted-foreground">{d}</p>
              <Button variant="outline" size="sm" className="mt-4">{a}</Button>
            </Specimen>
          ))}
        </div>
      </Group>

      <Group title="Filtering & pagination">
        <Specimen>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm"><SlidersHorizontal />Filters</Button>
            {filters.map((f) => (
              <span key={f} className="type-small inline-flex h-8 items-center gap-1.5 rounded-md border border-border-strong bg-muted px-2.5 font-medium">
                {f}
                <button aria-label={`Remove ${f}`} onClick={() => setFilters(filters.filter((x) => x !== f))} className="rounded-sm hover:bg-border"><X className="size-3.5" /></button>
              </span>
            ))}
            {filters.length > 0 && <Button variant="link" size="sm" onClick={() => setFilters([])}>Clear all</Button>}
          </div>
          <Separator className="my-5" />
          <div className="flex items-center justify-between gap-3">
            <p className="type-small text-muted-foreground">Showing 1–10 of 48</p>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm">Prev</Button>
              {[1, 2, 3].map((p) => (
                <Button key={p} size="icon-sm" variant={p === 1 ? "default" : "ghost"} className="hidden sm:inline-flex">{p}</Button>
              ))}
              <Button variant="ghost" size="sm">Next</Button>
            </div>
          </div>
        </Specimen>
      </Group>
    </Section>
  );
}
