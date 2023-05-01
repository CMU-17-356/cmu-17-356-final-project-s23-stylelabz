import express from 'express';
import { UserPreferenceModel } from '../models/userPreference.model';
import { connect_db, disconnet_db } from '../database/connection';
import {Schema} from "mongoose";

const router = express.Router();

/******************************
 * User Preference APIs
 **************************** */
// Create New Preference
router.post('/', async (req, res) => {
    connect_db();
    const data = new UserPreferenceModel({
        userId: req.body.userId,
        //highestClothingScore: req.body.highestClothingScore,
        //highestPatternScore: req.body.highestPatternScore,
        pastelScore: req.body.pastelScore,
        activewearScore: req.body.activewearScore,
        blazersScore: req.body.blazersScore,
        coatsScore: req.body.coatsScore,
        denimScore: req.body.denimScore,
        jacketsScore: req.body.jacketsScore,
        jeansScore: req.body.jeansScore,
        knitwearScore: req.body.knitwearScore,
        pantsScore: req.body.pantsScore,
        poloShirtsScore: req.body.poloShirtsScore,
        shirtsScore: req.body.shirtsScore,
        shortsScore: req.body.shortsScore,
        suitsScore: req.body.suitsScore,
        tshirtsScore: req.body.tshirtsScore,
        otherScore: req.body.otherScore,
        solidPatternScore: req.body.solidPatternScore,
        floralPatternScore: req.body.floralPatternScore,
        spottedPatternScore: req.body.spottedPatternScore,
        plaidPatternScore: req.body.plaidPatternScore,
        stripedPatternScore: req.body.stripedPatternScore,
        graphicsPatternScore: req.body.graphicsPatternScore,
        GrayFamilyColorSchemeScore: req.body.GrayFamilyColorSchemeScore,
        PinkFamilyColorSchemeScore: req.body.PinkFamilyColorSchemeScore,
        BlueFamilyColorSchemeScore: req.body.BlueFamilyColorSchemeScore,
        OrangeFamilyColorSchemeScore: req.body.OrangeFamilyColorSchemeScore,
        PastelPaletteScore: req.body.PastelPaletteScore,
        DarkPaletteScore: req.body.DarkPaletteScore,
        BrightPaletteScore: req.body.BrightPaletteScore,
        GoldPaletteScore: req.body.GoldPaletteScore,
        SummerPaletteScore: req.body.SummerPaletteScore,
        TealPaletteScore: req.body.TealPaletteScore,
        NeutralPaletteScore: req.body.NeutralPaletteScore,
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
    // disconnet_db();
});


// Increase preference score
router.put('/:user_id', async (req, res) => {
    connect_db();
                try {
                    const updatedResult =
                        await UserPreferenceModel.findOneAndUpdate(
                            {userId: req.params.user_id},
                            {
                                pastelScore: req.body.pastelScore,
                                activewearScore: req.body.activewearScore,
                                blazersScore: req.body.blazersScore,
                                coatsScore: req.body.coatsScore,
                                denimScore: req.body.denimScore,
                                jacketsScore: req.body.jacketsScore,
                                jeansScore: req.body.jeansScore,
                                knitwearScore: req.body.knitwearScore,
                                pantsScore: req.body.pantsScore,
                                poloShirtsScore: req.body.poloShirtsScore,
                                shirtsScore: req.body.shirtsScore,
                                shortsScore: req.body.shortsScore,
                                suitsScore: req.body.suitsScore,
                                tshirtsScore: req.body.tshirtsScore,
                                otherScore: req.body.otherScore,
                                solidPatternScore: req.body.solidPatternScore,
                                floralPatternScore: req.body.floralPatternScore,
                                spottedPatternScore: req.body.spottedPatternScore,
                                plaidPatternScore: req.body.plaidPatternScore,
                                stripedPatternScore: req.body.stripedPatternScore,
                                graphicsPatternScore: req.body.graphicsPatternScore,
                                GrayFamilyColorSchemeScore: req.body.GrayFamilyColorSchemeScore,
                                PinkFamilyColorSchemeScore: req.body.PinkFamilyColorSchemeScore,
                                BlueFamilyColorSchemeScore: req.body.BlueFamilyColorSchemeScore,
                                OrangeFamilyColorSchemeScore: req.body.OrangeFamilyColorSchemeScore,
                                PastelPaletteScore: req.body.PastelPaletteScore,
                                DarkPaletteScore: req.body.DarkPaletteScore,
                                BrightPaletteScore: req.body.BrightPaletteScore,
                                GoldPaletteScore: req.body.GoldPaletteScore,
                                SummerPaletteScore: req.body.SummerPaletteScore,
                                TealPaletteScore: req.body.TealPaletteScore,
                                NeutralPaletteScore: req.body.NeutralPaletteScore,
                            }
                        );
                    res.json(updatedResult);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
    }
    // disconnet_db();
});

export default router;


