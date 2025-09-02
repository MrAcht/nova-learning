/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { SearchIcon, CheckIcon } from 'lucide-react'

export default function Hero() {
  const [level, setLevel] = useState('beginner')
  const [duration, setDuration] = useState(30)
  const [goal, setGoal] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResult(`Based on your preferences, we recommend our "${level === 'beginner' ? 'Introduction to' : 'Advanced'} ${goal}" course. It's a ${duration}-day intensive program designed to ${level === 'beginner' ? 'get you started with' : 'deepen your knowledge of'} ${goal}.`)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-20 lg:pl-2">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-[#103428]">
          On crée des formations d'excellence.
          <br className="hidden sm:inline" />
          Pas des cours ordinaires.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
          Notre objectif est simple : proposer à nos apprenants LA formation
          qui leur permettra d'acquérir des compétences essentielles en 60 jours
          et d'accélérer leur carrière.
        </p>
        <p className="text-base sm:text-lg font-semibold mb-4 text-[#2f795e]">
          Processus simple. Formation intensive. Résultats garantis.
        </p>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-lg mx-auto max-w-md lg:max-w-full">
        <h2 className="text-2xl font-bold text-[#103428] mb-6 text-center">Trouvez votre formation idéale</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="goal" className="text-[#2f795e] font-semibold">Que voulez-vous apprendre ?</Label>
            <Input 
              id="goal" 
              placeholder="ex: Python, Data Science, Développement Web" 
              value={goal} 
              onChange={(e) => setGoal(e.target.value)}
              className="mt-1"
              required
            />
          </div>
          <div>
            <Label className="text-[#2f795e] font-semibold">Votre niveau actuel :</Label>
            <RadioGroup value={level} onValueChange={setLevel} className="flex flex-col text-[#103428] sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="beginner" />
                <Label htmlFor="beginner">Débutant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id="intermediate" />
                <Label htmlFor="intermediate">Intermédiaire</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id="advanced" />
                <Label htmlFor="advanced">Avancé</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="duration" className="text-[#2f795e] font-semibold">Durée de formation souhaitée (jours) :</Label>
            <div className="flex items-center space-x-4 text-[#103428]">
              <Slider
                id="duration"
                min={1}
                max={60}
                step={1}
                value={[duration]}
                onValueChange={(value) => setDuration(value[0])}
                className="flex-grow"
              />
              <span className="font-semibold">{duration}</span>
            </div>
          </div>
          <Button type="submit" className="w-full bg-[#2f795e] hover:bg-[#103428]">
            <SearchIcon className="w-4 h-4 mr-2" />
            Trouver ma formation
          </Button>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-[#f3f4f6] rounded-lg">
            <h3 className="text-lg font-semibold text-[#103428] mb-2 flex items-center">
              <CheckIcon className="w-5 h-5 mr-2 text-[#2f795e]" />
              Votre formation recommandée
            </h3>
            <p className="text-gray-700">{result}</p>
          </div>
        )}
      </div>
    </div>
  )
}
