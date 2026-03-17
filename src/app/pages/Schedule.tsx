import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MembershipModal from "@/components/MembershipModal";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const classTypes = ["All", "Strength", "Metcon", "Recovery"] as const;

interface ClassItem {
  time: string;
  name: string;
  type: "Strength" | "Metcon" | "Recovery";
  trainer: string;
  duration: string;
}

const schedule: Record<string, ClassItem[]> = {
  Monday: [
    { time: "6:00 AM", name: "Barbell Foundations", type: "Strength", trainer: "Alex Kovac", duration: "60 min" },
    { time: "7:30 AM", name: "Morning Burn", type: "Metcon", trainer: "Maya Chen", duration: "45 min" },
    { time: "12:00 PM", name: "Power Hour", type: "Strength", trainer: "Elena Voss", duration: "60 min" },
    { time: "5:30 PM", name: "City Gym and Spa Metcon", type: "Metcon", trainer: "Maya Chen", duration: "45 min" },
    { time: "7:00 PM", name: "Restore", type: "Recovery", trainer: "James Okafor", duration: "50 min" },
  ],
  Tuesday: [
    { time: "6:00 AM", name: "Olympic Lifting", type: "Strength", trainer: "Elena Voss", duration: "60 min" },
    { time: "9:00 AM", name: "Mobility Flow", type: "Recovery", trainer: "James Okafor", duration: "50 min" },
    { time: "12:00 PM", name: "Midday Metcon", type: "Metcon", trainer: "Maya Chen", duration: "45 min" },
    { time: "6:00 PM", name: "Hypertrophy Lab", type: "Strength", trainer: "Alex Kovac", duration: "60 min" },
  ],
  Wednesday: [
    { time: "6:00 AM", name: "Morning Burn", type: "Metcon", trainer: "Maya Chen", duration: "45 min" },
    { time: "12:00 PM", name: "Deadlift Club", type: "Strength", trainer: "Alex Kovac", duration: "60 min" },
    { time: "5:30 PM", name: "Interval Training", type: "Metcon", trainer: "Maya Chen", duration: "45 min" },
    { time: "7:00 PM", name: "Breathwork & Stretch", type: "Recovery", trainer: "James Okafor", duration: "50 min" },
  ],
  Thursday: [
    { time: "6:00 AM", name: "Squat Program", type: "Strength", trainer: "Elena Voss", duration: "60 min" },
    { time: "7:30 AM", name: "City Gym and Spa Metcon", type: "Metcon", trainer: "Maya Chen", duration: "45 min" },
    { time: "12:00 PM", name: "Active Recovery", type: "Recovery", trainer: "James Okafor", duration: "50 min" },
    { time: "6:00 PM", name: "Upper Body Power", type: "Strength", trainer: "Alex Kovac", duration: "60 min" },
  ],
  Friday: [
    { time: "6:00 AM", name: "Morning Burn", type: "Metcon", trainer: "Maya Chen", duration: "45 min" },
    { time: "9:00 AM", name: "Olympic Lifting", type: "Strength", trainer: "Elena Voss", duration: "60 min" },
    { time: "12:00 PM", name: "Lunchtime Metcon", type: "Metcon", trainer: "Maya Chen", duration: "45 min" },
    { time: "4:00 PM", name: "Friday Restore", type: "Recovery", trainer: "James Okafor", duration: "50 min" },
  ],
  Saturday: [
    { time: "8:00 AM", name: "Weekend Warrior", type: "Metcon", trainer: "Maya Chen", duration: "45 min" },
    { time: "10:00 AM", name: "Strength Lab", type: "Strength", trainer: "Alex Kovac", duration: "60 min" },
    { time: "12:00 PM", name: "Yoga & Mobility", type: "Recovery", trainer: "James Okafor", duration: "50 min" },
  ],
  Sunday: [
    { time: "9:00 AM", name: "Open Gym Strength", type: "Strength", trainer: "Elena Voss", duration: "60 min" },
    { time: "11:00 AM", name: "Sunday Restore", type: "Recovery", trainer: "James Okafor", duration: "50 min" },
  ],
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [filter, setFilter] = useState<typeof classTypes[number]>("All");
  const [membershipOpen, setMembershipOpen] = useState(false);

  const classes = schedule[selectedDay] || [];
  const filtered = filter === "All" ? classes : classes.filter((c) => c.type === filter);

  const typeColor = (type: string) => {
    if (type === "Strength") return "bg-foreground text-background";
    if (type === "Metcon") return "bg-primary text-primary-foreground";
    return "border border-foreground/20 text-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onMembershipClick={() => setMembershipOpen(true)} />

      <div className="pt-32 pb-32 px-6 lg:px-12">
        <div className="container mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Weekly Schedule
          </p>

          <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl mb-16 break-words">
            Find your <span className="text-primary">session.</span>
          </h1>

          {/* Day tabs */}
          <div className="flex overflow-x-auto gap-0 mb-8 border-b border-border">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors border-b-2 ${
                  selectedDay === day
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {classTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors border ${
                  filter === type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-foreground/20 text-foreground hover:border-primary"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Classes */}
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-muted-foreground text-sm uppercase tracking-widest">
                No {filter === "All" ? "" : filter.toLowerCase()} classes on {selectedDay}.
              </p>
            </div>
          ) : (
            <div className="space-y-0">
              {filtered.map((cls, i) => (
                <div
                  key={i}
                  className="border-t border-border py-6 grid grid-cols-12 gap-4 sm:gap-6 items-start sm:items-center hover:bg-muted/30 transition-colors px-2"
                >
                  {/* Time */}
                  <div className="col-span-4 sm:col-span-2">
                    <p className="text-display text-lg break-words">{cls.time}</p>
                  </div>

                  {/* Name */}
                  <div className="col-span-8 sm:col-span-4">
                    <p className="font-semibold text-sm break-words">{cls.name}</p>
                    <p className="text-xs text-muted-foreground mt-1 break-words">{cls.trainer}</p>
                  </div>

                  {/* Type */}
                  <div className="col-span-6 sm:col-span-3">
                    <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${typeColor(cls.type)}`}>
                      {cls.type}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="col-span-6 sm:col-span-3 text-right">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider break-words">
                      {cls.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
      <MembershipModal open={membershipOpen} onOpenChange={setMembershipOpen} />
    </div>
  );
};

export default Schedule;