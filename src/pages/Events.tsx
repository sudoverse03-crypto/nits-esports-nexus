import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import eventImage from "@/assets/event-placeholder.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Valorant Champions Cup",
      date: "Dec 15, 2025",
      location: "Main Auditorium",
      participants: 64,
      prize: "₹50,000",
      status: "Registration Open",
      image: eventImage,
    },
    {
      title: "FIFA Tournament",
      date: "Dec 20, 2025",
      location: "Gaming Arena",
      participants: 32,
      prize: "₹30,000",
      status: "Registration Open",
      image: eventImage,
    },
    {
      title: "CS:GO League Finals",
      date: "Dec 28, 2025",
      location: "Esports Hub",
      participants: 16,
      prize: "₹75,000",
      status: "Coming Soon",
      image: eventImage,
    },
  ];

  const pastEvents = [
    {
      title: "BGMI Mobile Masters",
      date: "Nov 10, 2025",
      winner: "Team Phoenix",
      participants: 48,
    },
    {
      title: "League of Legends Showdown",
      date: "Oct 25, 2025",
      winner: "Dragons Elite",
      participants: 32,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-orbitron text-5xl font-bold mb-4 text-gradient">
            Events & Tournaments
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compete in exciting tournaments and showcase your gaming skills
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="font-orbitron text-3xl font-bold mb-8 flex items-center gap-2">
            <Calendar className="h-8 w-8 text-primary" />
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="glass-card border-primary/20 hover:border-primary/50 transition-all hover:glow-primary overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary/90 font-orbitron">
                    {event.status}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-orbitron text-xl">{event.title}</CardTitle>
                  <CardDescription className="space-y-2 mt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      {event.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{event.participants} slots</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-accent" />
                      <span className="text-sm font-semibold">{event.prize}</span>
                    </div>
                  </div>
                  <Button className="w-full font-orbitron glow-primary">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="font-orbitron text-3xl font-bold mb-8 flex items-center gap-2">
            <Trophy className="h-8 w-8 text-accent" />
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-orbitron">{event.title}</CardTitle>
                      <CardDescription className="mt-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          {event.date}
                        </div>
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-accent/50 text-accent">
                      Completed
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5">
                      <span className="text-sm font-semibold">Winner:</span>
                      <span className="text-sm text-primary font-orbitron">{event.winner}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.participants} participants
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
